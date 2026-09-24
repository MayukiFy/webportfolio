/**
 * ====================================================================
 * CONTACT.JS - Form Validation, Feedback Alert & Copy to Clipboard
 * Project: Creative Media Student Portfolio (MayuiFy)
 * ====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initCopyEmail();
});

/**
 * 1. CONTACT FORM VALIDATION & SUBMISSION SIMULATION
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const subject = document.getElementById('senderSubject').value.trim();
    const message = document.getElementById('senderMessage').value.trim();
    const submitBtn = document.getElementById('submitBtn');

    if (!name || !email || !subject || !message) {
      showFormFeedback('กรุณากรอกข้อมูลให้ครบถ้วนทุกช่อง', 'danger');
      return;
    }

    // Email pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormFeedback('รูปแบบอีเมลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง', 'warning');
      return;
    }

    // Simulate sending with loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> กำลังส่งข้อความ...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      form.reset();

      showFormFeedback(
        `✨ ขอบคุณครับคุณ <strong>${name}</strong>! ข้อความของคุณถูกส่งเรียบร้อยแล้ว ผมจะติดต่อกลับทาง <em>${email}</em> โดยเร็วที่สุดครับ`,
        'success'
      );
    }, 1200);
  });

  function showFormFeedback(message, type) {
    if (!alertBox) return;

    alertBox.className = `alert alert-${type} alert-dismissible fade show mt-3 shadow-sm`;
    alertBox.innerHTML = `
      <div class="d-flex align-items-center">
        <i class="fa-solid ${type === 'success' ? 'fa-circle-check text-success' : 'fa-triangle-exclamation text-danger'} me-2 fs-5"></i>
        <div>${message}</div>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    alertBox.style.display = 'block';

    // Auto dismiss after 6 seconds
    setTimeout(() => {
      alertBox.classList.remove('show');
      setTimeout(() => {
        alertBox.style.display = 'none';
      }, 300);
    }, 6000);
  }
}

/**
 * 2. COPY EMAIL TO CLIPBOARD
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailTextEl = document.getElementById('emailAddressText');

  if (!copyBtn || !emailTextEl) return;

  copyBtn.addEventListener('click', () => {
    const emailToCopy = emailTextEl.textContent.trim();

    navigator.clipboard.writeText(emailToCopy).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa-solid fa-check me-1"></i> คัดลอกแล้ว!';
      copyBtn.classList.add('btn-success');
      copyBtn.classList.remove('btn-outline-primary');

      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.classList.remove('btn-success');
      }, 2500);
    }).catch(err => {
      console.error('Clipboard copy failed: ', err);
    });
  });
}
