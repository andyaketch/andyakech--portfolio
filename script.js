const projects = [
  {
    title: "ASAL Healthcare Accessibility",
    description: "A PostGIS-based geospatial database and analysis project examining healthcare accessibility across Kenya's Arid and Semi-Arid Land (ASAL) counties. It brings together spatial data on health facilities and population distribution to identify gaps in access to care across these underserved regions, using PostGIS for spatial queries and analysis.",
    image: "Assets/desert.jpg",
    alt: "ASAL Healthcare Accessibility Mapping",
    tags: ["PostGIS", "Spatial SQL", "Accessibility Modeling"]
  },
  {
    title: "Kiambu County Land Use & Environment Study",
    description: "A remote sensing and machine learning study of environmental change in Kiambu County, Kenya. It combines RSEI (Remote Sensing Ecological Index) and LULC (Land Use/Land Cover) classification with SHAP analysis to interpret which factors are driving the changes detected in satellite imagery. The findings were written up as a Medium blog series, translating the technical analysis into a narrative on how the county's land and environment are shifting over time.",
    image: "Assets/ecology.jpg",
    alt: "Kiambu County Land Use and Environment Study",
    tags: ["Remote Sensing", "Machine Learning", "SHAP Interpretability", "RSEI & LULC"]
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
    article.className = "project1"; // reuses existing card styling from style.css

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


renderProjects();
