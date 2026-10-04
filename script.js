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
    description: "Integrating their custom autonomous picking bots completely transformed our warehouse throughput. The deployment was seamless, and the AI routing cut our order processing times by nearly 40% in the first quarter.",
    image:"Assets/testimonial1.jpg",
    alt: "Julian's Testimonial",

  },
  {
    title: "Elena",
    description: "Their lab built an adaptive computer-vision model for our diagnostic hardware that exceeded our accuracy benchmarks within weeks. The team’s deep expertise in robotics control and real-time inference made them feel like an extension of our internal team",
    image: "Assets/testimonial2.jpg",
    alt: "Elena's Testimonial", 
  },
    {
    title: "Maya",
    description: "From early prototyping to edge AI deployment in rugged field conditions, their robotic sensor integration delivered reliable performance where off-the-shelf options failed. They are our go-to partner for complex automation challenges.",
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
