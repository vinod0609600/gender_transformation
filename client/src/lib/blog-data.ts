export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "surgical-procedures-systematic-review",
    title: "Surgical Procedures for Gender Reassignment: A Systematic Review",
    excerpt: "An in-depth look at the safety, outcomes, and satisfaction rates of various gender-affirming surgical procedures for both MTF and FTM individuals.",
    content: `
      <h2>Overview</h2>
      <p>With the increasing prevalence of gender dysphoria and the evolving landscape of medical care, it is crucial to understand the efficacy and safety of surgical interventions. A systematic review of 82 published papers has provided valuable insights into procedures such as vaginoplasty, phalloplasty, and mastectomy.</p>
      
      <h3>Key Findings for MTF Procedures</h3>
      <p>The review highlighted that vaginoplasty and clitoroplasty are well-documented with generally satisfactory outcomes. Patients reported significant improvements in quality of life and sexual function. However, the need for long-term follow-up data remains a priority for the medical community.</p>
      
      <h3>Key Findings for FTM Procedures</h3>
      <p>For female-to-male individuals, procedures like mastectomy and phalloplasty have shown positive results. Satisfaction rates are high, with many patients reporting successful alignment of their physical body with their gender identity. Complications, while present, are generally manageable.</p>
      
      <h3>The Importance of Validated Assessment</h3>
      <p>One of the main takeaways from this review is the need for standardized, validated assessment measures. This will allow for better comparison of surgical techniques and ensure that patient outcomes are consistently optimized.</p>
      
      <p><em>Source: Evaluation of surgical procedures for sex reassignment: a systematic review (PubMed)</em></p>
    `,
    author: "Medical Research Team",
    date: "June 15, 2024",
    readTime: "8 min read",
    category: "Medical Research",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "primary-sigmoid-vaginoplasty",
    title: "Sigmoid Vaginoplasty: Technique and Outcomes",
    excerpt: "Exploring the sigmoid vaginoplasty technique as a reliable option for transwomen, offering satisfactory depth and reduced need for dilation.",
    content: `
      <h2>What is Sigmoid Vaginoplasty?</h2>
      <p>Sigmoid vaginoplasty is a surgical technique used to create a neovagina using a segment of the sigmoid colon. This method is often recommended for patients who may not have sufficient tissue for a penile inversion or who are seeking an alternative that offers self-lubrication.</p>
      
      <h3>Advantages of the Procedure</h3>
      <ul>
        <li><strong>Adequate Depth:</strong> One of the primary benefits is the ability to achieve significant vaginal depth, which is crucial for sexual function.</li>
        <li><strong>Self-Lubrication:</strong> The mucosal lining of the sigmoid colon provides natural lubrication, reducing the need for external lubricants.</li>
        <li><strong>Reduced Dilation:</strong> Unlike other techniques, sigmoid vaginoplasty often requires a less rigorous dilation schedule to maintain depth and width.</li>
      </ul>
      
      <h3>Outcomes and Satisfaction</h3>
      <p>A retrospective review of patients undergoing this procedure demonstrated high satisfaction rates. The majority of patients achieved a functional vaginal depth with a low complication rate. Issues such as specific dietary restrictions or mucous production are generally manageable and decrease over time.</p>
      
      <p><em>Source: Primary Sigmoid Vaginoplasty in Transwomen: Technique and Outcomes (PMC)</em></p>
    `,
    author: "Dr. Christopher J. Salgado",
    date: "May 20, 2024",
    readTime: "6 min read",
    category: "Genital Surgery",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ftm-chest-wall-contouring",
    title: "Chest-Wall Contouring for FTM Individuals",
    excerpt: "A look at the algorithmic approach to choosing the right subcutaneous mastectomy technique for optimal aesthetic results.",
    content: `
      <h2>The Importance of Technique Selection</h2>
      <p>Chest-wall contouring, or "top surgery," is often the first surgical step for trans men. The goal is not just tissue removal but creating a masculine chest contour. The choice of technique—whether semicircular, transareolar, or concentric circular—depends heavily on skin elasticity and the amount of excess skin.</p>
      
      <h3>Developing an Algorithm</h3>
      <p>Surgeons have developed an algorithm to match patients with the best procedure for their anatomy. Factors include breast size, ptosis (sagging), and skin quality. This personalized approach minimizes scarring and maximizes aesthetic satisfaction.</p>
      
      <h3>Outcomes</h3>
      <p>In a large series of 184 procedures, complication rates were low (12.5%), and patient satisfaction was high. The study emphasizes that while secondary aesthetic corrections are sometimes needed to perfect the result, the initial psychological benefit is profound.</p>
      
      <p><em>Source: Chest-wall contouring surgery in female-to-male transsexuals: a new algorithm (PubMed)</em></p>
    `,
    author: "Medical Research Team",
    date: "April 10, 2024",
    readTime: "5 min read",
    category: "Chest Surgery",
    imageUrl: "https://images.unsplash.com/photo-1571772996211-2f02c97276c9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "breast-augmentation-transgender",
    title: "Breast Augmentation in Transgender Patients",
    excerpt: "Navigating the unique anatomical and aesthetic considerations for breast augmentation in transfeminine individuals.",
    content: `
      <h2>Beyond Standard Augmentation</h2>
      <p>While the surgical principles of breast augmentation are similar for cisgender and transgender women, transfeminine patients often present with unique anatomical characteristics. These include a wider chest wall, tighter skin envelope, and distinct nipple positioning.</p>
      
      <h3>Preoperative Considerations</h3>
      <p>A thorough evaluation is essential. Surgeons must consider the patient's hormonal therapy history, as breast growth from hormones can influence implant choice and placement. Setting realistic goals regarding size and cleavage creation is a collaborative process.</p>
      
      <h3>Surgical Techniques</h3>
      <p>To achieve a natural look, surgeons may use larger implants or specific profiles to suit the wider chest. Placement is typically submuscular to ensure adequate soft tissue coverage. Fat grafting is also becoming a popular adjunct to soften contours and enhance cleavage.</p>
      
      <p><em>Source: Breast augmentation in the transgender patient: narrative review (PMC)</em></p>
    `,
    author: "Dr. Jenna C. Bekeny",
    date: "March 05, 2024",
    readTime: "7 min read",
    category: "Chest Surgery",
    imageUrl: "https://images.unsplash.com/photo-1606902965551-dce061e2df13?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "novel-surgical-techniques-ftm",
    title: "Novel Surgical Techniques in FTM Surgery",
    excerpt: "Advances in metoidioplasty and phalloplasty are offering FTM patients more options for functional and aesthetic genital reconstruction.",
    content: `
      <h2>The Evolution of FTM Genital Surgery</h2>
      <p>Reconstructing a neophallus is one of the most complex challenges in gender-affirming surgery. Techniques have evolved from simple metoidioplasty to sophisticated phalloplasty using free flaps.</p>
      
      <h3>Metoidioplasty</h3>
      <p>For patients with sufficient clitoral growth from testosterone, metoidioplasty offers a way to create a small phallus with erectile potential. It is a less invasive option with a lower complication rate and preserves primary sensation.</p>
      
      <h3>Phalloplasty Advances</h3>
      <p>Phalloplasty remains the gold standard for creating an adult-sized phallus. New techniques using different donor sites (like the anterolateral thigh or radial forearm) are improving outcomes. The focus is now on not just aesthetics but also sensation and urinary function.</p>
      
      <h3>Patient-Centric Care</h3>
      <p>The choice of technique is deeply personal. Surgeons play a vital role in educating patients about the trade-offs of each method, ensuring that the chosen path aligns with the patient's lifestyle and goals.</p>
      
      <p><em>Source: Novel surgical techniques in female to male gender confirming surgery (PMC)</em></p>
    `,
    author: "Dr. Miroslav L. Djordjevic",
    date: "February 18, 2024",
    readTime: "9 min read",
    category: "Genital Surgery",
    imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "ftm-surgery-overview",
    title: "Comprehensive Guide to Female-to-Male Surgery",
    excerpt: "A complete overview of surgical options for trans men, including top surgery, hysterectomy, and genital reconstruction.",
    content: `
      <h2>Understanding the Options</h2>
      <p>Transitioning is a unique journey for everyone. For trans men and transmasculine individuals, there are several surgical options available to align their physical appearance with their gender identity.</p>
      
      <h3>Top Surgery</h3>
      <p>Mastectomy, or chest reconstruction, is the most common procedure. It involves removing breast tissue and contouring the chest. Satisfaction rates are incredibly high, with studies showing significant improvements in mental health.</p>
      
      <h3>Reproductive Health</h3>
      <p>Hysterectomy (removal of the uterus) and oophorectomy (removal of ovaries) are options for those who want to stop menstruation permanently or remove organs that cause dysphoria. These can often be performed laparoscopically.</p>
      
      <h3>Genital Reconstruction</h3>
      <p>The choice between metoidioplasty and phalloplasty depends on the patient's desire for size versus the wish for a less complex surgery. Both options can include scrotoplasty (creation of a scrotum) and testicular implants to complete the reconstruction.</p>
      
      <p><em>Source: Medical News Today</em></p>
    `,
    author: "Medical News Today",
    date: "January 22, 2024",
    readTime: "6 min read",
    category: "Patient Guide",
    imageUrl: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800"
  }
];
