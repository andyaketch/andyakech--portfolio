const projects = [
  {
    title: "ASAL Healthcare Accessibility",
    description: "A PostGIS-based geospatial database and analysis project examining healthcare accessibility across Kenya's Arid and Semi-Arid Land (ASAL) counties. It brings together spatial data on health facilities and population distribution to identify gaps in access to care across these underserved regions, using PostGIS for spatial queries and analysis.",
    image: "Assets/desert.jpg",
    alt: "ASAL Healthcare Accessibility Mapping",
    tags: ["PostGIS", "Spatial SQL", "Accessibility Modeling"],
    link:"https://medium.com/@andyaketch/left-behind-on-foot-mapping-healthcare-access-in-kenyas-forgotten-drylands-6115305d2d70" 
  },
  {
    title: "Kiambu County Land Use & Environment Study",
    description: "A remote sensing and machine learning study of environmental change in Kiambu County, Kenya. It combines RSEI (Remote Sensing Ecological Index) and LULC (Land Use/Land Cover) classification with SHAP analysis to interpret which factors are driving the changes detected in satellite imagery. The findings were written up as a Medium blog series, translating the technical analysis into a narrative on how the county's land and environment are shifting over time.",
    image: "Assets/ecology.jpg",
    alt: "Kiambu County Land Use and Environment Study",
    tags: ["Remote Sensing", "Machine Learning", "SHAP Interpretability", "RSEI & LULC"],
    link: "https://medium.com/@andyaketch/fifteen-years-of-data-about-kiambus-ecological-health-9fd3fe32ccf1"
    
  }
];

// build the project then insert them
function renderProjects() {
  const container = document.getElementById("projects-grid");

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    // Build the little tag badges (e.g. "PostGIS", "Remote Sensing")
    let tagsHtml = "";
    for (let j = 0; j < project.tags.length; j++) {
      tagsHtml += `<span class="project-tag">${project.tags[j]}</span>`;
    }

    // Create a new <article> element for this project
    const article = document.createElement("article");
    article.className = "project1"; // re-uses existing card styling from style.css doc

    // Fill it in with the project's info
    article.innerHTML = `
      <div class="project1-image">
        <img src="${project.image}" alt="${project.alt}">
      </div>
      <div class="project-content">
        <div class="project-tags">${tagsHtml}</div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;

    container.appendChild(article);
  }
}

const testimonialsData = [
  {
    title: "Julian",
    description: "Andy took our scattered project reports and turned them into a clean, functional portfolio site that actually shows our work instead of just listing it. The turnaround was fast, and he explained every design decision clearly along the way.",
    image:"Assets/testimonial1.jpg",
    alt: "Julian's Testimonial",

  },
  {
    title: "Elena",
    description: "We needed a site that could present technical spatial data work to non-technical clients, and Andy nailed that balance. The layout, the project write-ups, everything communicated credibility without drowning people in jargon.",
    image: "Assets/testimonial2.jpg",
    alt: "Elena's Testimonial", 
  },
    {
    title: "Maya",
    description: "Andy built our portfolio page from scratch — responsive, fast, and easy for us to update ourselves afterward. He was patient with revisions and clearly understood what we needed even when we struggled to describe it.",
    image: "Assets/testimonial3.jpg",
    alt: "Maya's Testimonial",   
  }
];

function renderTestimonials() {
  const container = document.getElementById("testimonialsContainer");

  container.innerHTML = "";

  // Loop through every testimonial object in the array
  testimonialsData.forEach((item) => {
    const article = document.createElement("article");
    article.className = "testimonial-card";

    // Stamp the template using the individual item's properties
    article.innerHTML = `
      <div class="testimonial-image">
        <img src="${item.image}" alt="${item.alt}">
      </div>
      <div class="testimonial-content">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;

    container.appendChild(article);
  });
}

renderTestimonials()
renderProjects();
