document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Toggle the 'show' and 'active' classes on click
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
  });
});

// JavaScript for Interactive Features

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust for sticky navbar
          behavior: "smooth",
        });
      }
    });
  });

  // Highlight active section in navigation bar
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.7,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const navLink = document.querySelector(
        `.nav-links a[href="#${entry.target.id}"]`
      );

      if (entry.isIntersecting) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));
});


//View CV Modal
        const modal = document.getElementById("cvModal");

        const cvBtn = document.getElementById("cvBtn");

        const closeBtn = document.getElementById("closeBtn");

        cvBtn.onclick = function (event) {
            event.preventDefault(); 
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        closeBtn.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
}
        

//certifications modal

function openModal(modalId, filePath) {
  const modal = document.getElementById(modalId);
  const modalBody = modal.querySelector(".modal-body");
  modal.style.display = "flex";

  const fileExtension = filePath.split(".").pop().toLowerCase();

  if (fileExtension === "pdf") {
    modalBody.innerHTML = `<iframe src="${filePath}"></iframe>`;
  } else if (
    fileExtension === "jpg" ||
    fileExtension === "jpeg" ||
    fileExtension === "png"
  ) {
    modalBody.innerHTML = `<img src="${filePath}" alt="Full Preview" style="width:100%; height:auto;">`;
  } else {
    modalBody.innerHTML = "<p>File type not supported.</p>";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}


//Disabled link
document
  .getElementById("disabledLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });