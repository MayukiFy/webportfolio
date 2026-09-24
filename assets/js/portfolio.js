/**
 * ====================================================================
 * PORTFOLIO.JS - Projects Filtering, Data Management & Detail Modal
 * Project: Creative Media Student Portfolio (MayuiFy)
 * ====================================================================
 */

// Portfolio Projects Database
const portfolioData = {
  1: {
    title: 'Aurora 3D Experience',
    category: 'Web Design & 3D Interactive',
    image: 'assets/images/project-1.svg',
    year: '2026',
    client: 'Creative Media Exhibition',
    tools: 'Three.js, WebGL, HTML5, CSS3, GSAP',
    description: 'โปรเจกต์เว็บไซต์เชิงประสบการณ์ 3 มิติ (Immersive 3D Experience) ที่จำลองปรากฏการณ์แสงเหนือ (Aurora Borealis) ให้ผู้ใช้สามารถโต้ตอบกับสายแสงและอนุภาคแสงแบบ Real-time ผ่านการเลื่อนเมาส์และระบบเสียงตามจังหวะ',
    highlights: [
      'ประมวลผล 3D Particles กว่า 10,000 ชิ้นด้วย WebGL Shaders ลื่นไหล 60 FPS',
      'รองรับการโต้ตอบทั้งบนเมาส์และหน้าจอสัมผัส (Touch Gesture Support)',
      'ระบบเสียง Spatial Audio แบบ Dynamic ตามมุมมองกล้อง'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  2: {
    title: 'Neon Cyber City Concept Art',
    category: 'Graphic Design & Matte Painting',
    image: 'assets/images/project-2.svg',
    year: '2025',
    client: 'Sci-Fi Short Film Project',
    tools: 'Adobe Photoshop, Illustrator, Wacom Intuos',
    description: 'การออกแบบภาพคอนเซ็ปต์อาร์ตเมืองไซเบอร์พังค์ในยุคอนาคต ด้วยเทคนิค Matte Painting และ Digital Illustration โดยเน้นคู่สี Cyan-Pink นีออน และการสะท้อนของแสงไฟบนพื้นผิวยามค่ำคืน',
    highlights: [
      'การจัดองค์ประกอบภาพแบบ One-Point Perspective ชวนดึงดูดสายตา',
      'งานออกแบบตัวอักษรและป้ายไฟนีออนสไตล์ Retro-futurism กว่า 20 แบบ',
      'การคุมแสงเงาและ Layer Compositing กว่า 80 เลเยอร์'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  3: {
    title: 'Pulse Beat Audio-Visualizer',
    category: 'Motion Graphic & Video Editing',
    image: 'assets/images/project-3.svg',
    year: '2025',
    client: 'Independent Music Artist',
    tools: 'After Effects, Premiere Pro, Trapcode Particular',
    description: 'ชิ้นงานโมชันกราฟิกแสดงผลคลื่นเสียงแบบ Sound-Reactive สำรวจจังหวะดนตรีแนว Synthwave ผ่านรูปทรงเรขาคณิตและเส้นลำแสงที่เต้นตามความถี่เสียงเบสและเสียงสูงอย่างแม่นยำ',
    highlights: [
      'ใช้ After Effects Audio Spectrum Expression ควบคุมการเคลื่อนไหวตามย่านความถี่',
      'เรนเดอร์ในความละเอียดระดับ 4K 60FPS สำหรับคอนเสิร์ตและมิวสิควิดีโอ',
      'ออกแบบ Color Grading คู่สีชมพู-ม่วง-ฟ้า ให้ความรู้สึกทันสมัยและมีพลัง'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  4: {
    title: 'FinFlow Mobile Banking UI/UX',
    category: 'UI/UX Design',
    image: 'assets/images/project-4.svg',
    year: '2026',
    client: 'FinTech Case Study',
    tools: 'Figma, FigJam, ProtoPie, User Testing',
    description: 'การออกแบบแอปพลิเคชันธุรกรรมการเงินสำหรับกลุ่มคนรุ่นใหม่ (Gen Z & Millennials) มุ่งเน้นการใช้งานที่ง่าย รวดเร็ว ลดความซับซ้อนของตัวเลขด้วย Data Visualization สไตล์มินิมอลและโทนสีผ่อนคลาย',
    highlights: [
      'ทำ User Research และ Usability Testing กับกลุ่มเป้าหมาย 30 คน',
      'ออกแบบ Design System ครบครันด้วย Component Variants และ Auto-layout ใน Figma',
      'Interactive Micro-interactions และ Animation การยืนยันสลิปโอนเงิน'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  5: {
    title: 'Portraits of Bangkok Street',
    category: 'Photography & Visual Storytelling',
    image: 'assets/images/project-5.svg',
    year: '2025',
    client: 'Urban Culture Photo Series',
    tools: 'Sony Alpha, Prime Lens 50mm f/1.4, Adobe Lightroom',
    description: 'ชุดภาพถ่ายสารคดีสตรีทสะท้อนวิถีชีวิตผู้คนและแสงสียามค่ำคืนในย่านเยาวราชและสยาม โดยเน้นการเล่าเรื่องผ่านอารมณ์ สายตา แสงนีออนและเงาสะท้อนจากแอ่งน้ำหลังฝนตก',
    highlights: [
      'คัดเลือกผลงาน 12 ภาพจากทั้งหมดกว่า 1,500 ช็อต',
      'ปรับโทนสีเฉพาะตัว (Custom Cyber-Noir Color Preset) เน้นคู่สีส้ม-ฟ้า-ชมพู',
      'จัดแสดงในนิทรรศการศิลปะภาพถ่ายดิจิทัลของมหาวิทยาลัย'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  6: {
    title: 'SynthWave Dreams AI Film',
    category: 'AI Tools & Video Editing',
    image: 'assets/images/project-6.svg',
    year: '2026',
    client: 'Experimental AI Narrative',
    tools: 'Midjourney v6, Runway Gen-2, Topaz AI, Premiere Pro',
    description: 'การทดลองสร้างภาพยนตร์สั้นเชิงทดลองด้วยการประสาน Generative AI เข้ากับการตัดต่อภาพยนตร์มนุษย์ โดยสร้าง Storyboard, ฉาก และโมเดล 3D เคลื่อนไหวด้วย AI แล้วนำมาร้อยเรียงด้วยการเล่าเรื่องที่ลึกซึ้ง',
    highlights: [
      'การเขียน Prompt Engineering ขั้นสูงเพื่อคุม Art Style ให้สอดคล้องกันทุกฉาก',
      'Upscaling และ Video Interpolation ให้ภาพเนียนตา 60FPS ด้วย AI Models',
      'ผสมผสาน AI Voice Synthesis กับ Original Ambient Soundtrack'
    ],
    liveUrl: '#',
    githubUrl: '#'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioFilter();
  initPortfolioModal();
});

/**
 * 1. PORTFOLIO FILTER
 */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.portfolio-card-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/**
 * 2. PORTFOLIO DETAIL MODAL
 */
function initPortfolioModal() {
  const viewBtns = document.querySelectorAll('.btn-view-project');
  const modalElement = document.getElementById('projectDetailModal');
  if (!modalElement) return;

  const bsModal = new bootstrap.Modal(modalElement);

  viewBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const projectId = this.getAttribute('data-project-id');
      const project = portfolioData[projectId];

      if (project) {
        document.getElementById('modalProjectTitle').textContent = project.title;
        document.getElementById('modalProjectCategory').textContent = project.category;
        document.getElementById('modalProjectImg').src = project.image;
        document.getElementById('modalProjectImg').alt = project.title;
        document.getElementById('modalProjectYear').textContent = project.year;
        document.getElementById('modalProjectClient').textContent = project.client;
        document.getElementById('modalProjectTools').textContent = project.tools;
        document.getElementById('modalProjectDesc').textContent = project.description;

        const highlightsList = document.getElementById('modalProjectHighlights');
        highlightsList.innerHTML = '';
        project.highlights.forEach(item => {
          const li = document.createElement('li');
          li.className = 'mb-2';
          li.innerHTML = `<i class="fa-solid fa-circle-check text-primary me-2"></i> ${item}`;
          highlightsList.appendChild(li);
        });

        bsModal.show();
      }
    });
  });
}
