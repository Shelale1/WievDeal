function accordion(value) {}

window.addEventListener("scroll", function () {
  var element = document.getElementById("right-side");
  var scrollPosition = window.scrollY;
  if (scrollPosition > 500) {
    element.style.position = "sticky";
    element.style.top = "130px";
    element.style.right = "0";
  } else {
    element.style.position = "relative";
    element.style.top = "";
    element.style.right = "";
  }
});

document.querySelectorAll(".image-grid img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".modal-image").style.display = "block";

    document.querySelector(".modal-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".modal-image").onclick = () => {
  document.querySelector(".modal-image").style.display = "none";
};

const cardInfo = document.getElementById("card-list");

const comments = [
  {
    imgURL:
      "https://a0.muscache.com/im/pictures/user/c2354fd7-6b41-4825-a345-42acd75e0699.jpg?im_w=240",
    name: "Pratik",
    city: "Mumbai, India",
    date: "November 2023",
    duration: "Stayed one night",
    message:
      "this is definitely one of the most unique airbnb stays/ experience I have stayed at and had. How many times in your life can you say 'I stayed in a wine barrel'. While it may sound like cramped up / congested, it is on the contrary super cozy and comfortable with nice warm blankets and plug points inside the barrel. Besides the stay the hosts Mariam and Lika offer their guests for traditional home cooked meals, and offer tea tours too (at an additional cost). The dinner is a must as I had my best meal in Georgia here, we also got a great insight into the history of the georgian tea and had lengthy chats with hosts about georgian culture and lifestyle.I had a really good experience here and i would 100% recommend this experience to everyone in georgia.",
  },
  {
    imgURL:
      "https://a0.muscache.com/im/pictures/user/c2354fd7-6b41-4825-a345-42acd75e0699.jpg?im_w=240",
    name: "Pratik",
    city: "Mumbai, India",
    date: "November 2023",
    duration: "Stayed one night",
    message:
      "this is definitely one of the most unique airbnb stays/ experience I have stayed at and had. How many times in your life can you say 'I stayed in a wine barrel'. While it may sound like cramped up / congested, it is on the contrary super cozy and comfortable with nice warm blankets and plug points inside the barrel. Besides the stay the hosts Mariam and Lika offer their guests for traditional home cooked meals, and offer tea tours too (at an additional cost). The dinner is a must as I had my best meal in Georgia here, we also got a great insight into the history of the georgian tea and had lengthy chats with hosts about georgian culture and lifestyle.I had a really good experience here and i would 100% recommend this experience to everyone in georgia.",
  },

  {
    imgURL:
      "https://a0.muscache.com/im/pictures/user/c2354fd7-6b41-4825-a345-42acd75e0699.jpg?im_w=240",
    name: "Pratik",
    city: "Mumbai, India",
    date: "November 2023",
    duration: "Stayed one night",
    message:
      "this is definitely one of the most unique airbnb stays/ experience I have stayed at and had. How many times in your life can you say 'I stayed in a wine barrel'. While it may sound like cramped up / congested, it is on the contrary super cozy and comfortable with nice warm blankets and plug points inside the barrel. Besides the stay the hosts Mariam and Lika offer their guests for traditional home cooked meals, and offer tea tours too (at an additional cost). The dinner is a must as I had my best meal in Georgia here, we also got a great insight into the history of the georgian tea and had lengthy chats with hosts about georgian culture and lifestyle.I had a really good experience here and i would 100% recommend this experience to everyone in georgia.",
  },

  {
    imgURL:
      "https://a0.muscache.com/im/pictures/user/c2354fd7-6b41-4825-a345-42acd75e0699.jpg?im_w=240",
    name: "Pratik",
    city: "Mumbai, India",
    date: "November 2023",
    duration: "Stayed one night",
    message:
      "this is definitely one of the most unique airbnb stays/ experience I have stayed at and had. How many times in your life can you say 'I stayed in a wine barrel'. While it may sound like cramped up / congested, it is on the contrary super cozy and comfortable with nice warm blankets and plug points inside the barrel. Besides the stay the hosts Mariam and Lika offer their guests for traditional home cooked meals, and offer tea tours too (at an additional cost). The dinner is a must as I had my best meal in Georgia here, we also got a great insight into the history of the georgian tea and had lengthy chats with hosts about georgian culture and lifestyle.I had a really good experience here and i would 100% recommend this experience to everyone in georgia.",
  },
  {
    imgURL:
      "https://a0.muscache.com/im/pictures/user/c2354fd7-6b41-4825-a345-42acd75e0699.jpg?im_w=240",
    name: "Pratik",
    city: "Mumbai, India",
    date: "November 2023",
    duration: "Stayed one night",
    message:
      "this is definitely one of the most unique airbnb stays/ experience I have stayed at and had. How many times in your life can you say 'I stayed in a wine barrel'. While it may sound like cramped up / congested, it is on the contrary super cozy and comfortable with nice warm blankets and plug points inside the barrel. Besides the stay the hosts Mariam and Lika offer their guests for traditional home cooked meals, and offer tea tours too (at an additional cost). The dinner is a must as I had my best meal in Georgia here, we also got a great insight into the history of the georgian tea and had lengthy chats with hosts about georgian culture and lifestyle.I had a really good experience here and i would 100% recommend this experience to everyone in georgia.",
  },
  {
    imgURL:
      "https://a0.muscache.com/im/pictures/user/c2354fd7-6b41-4825-a345-42acd75e0699.jpg?im_w=240",
    name: "Pratik",
    city: "Mumbai, India",
    date: "November 2023",
    duration: "Stayed one night",
    message:
      "this is definitely one of the most unique airbnb stays/ experience I have stayed at and had. How many times in your life can you say 'I stayed in a wine barrel'. While it may sound like cramped up / congested, it is on the contrary super cozy and comfortable with nice warm blankets and plug points inside the barrel. Besides the stay the hosts Mariam and Lika offer their guests for traditional home cooked meals, and offer tea tours too (at an additional cost). The dinner is a must as I had my best meal in Georgia here, we also got a great insight into the history of the georgian tea and had lengthy chats with hosts about georgian culture and lifestyle.I had a really good experience here and i would 100% recommend this experience to everyone in georgia.",
  },
];

let txt = " ";

comments.forEach(function (item, index) {
  txt += `<div class="card">
  <div class="card-inner">
  <div class="profil">
  <div class="image">
    <img
      src="${item.imgURL}"
      alt=""
    />
  </div>

  <div class="about">
    <p>${item.name}</p>
    <span>${item.city}</span>
  </div>
</div>
<div class="message">
  <div class="header">
    <div class="stars">
      <i class="fa-solid fa-star"></i
      ><i class="fa-solid fa-star"></i
      ><i class="fa-solid fa-star"></i
      ><i class="fa-solid fa-star"></i
      ><i class="fa-solid fa-star"></i>
    </div>
    <p>${item.date}</p>
    <span>${item.duration}</span>
  </div>
  <div id="text">
    <p class="clamp">
      ${item.message}
    </p>
    <p id="moreInfo">Show more</p>
  </div>
  
</div></div>
</div>
    `;
});

cardInfo.innerHTML = txt;

document.addEventListener("DOMContentLoaded", function () {
  var moreInfoBtns = document.querySelectorAll(".card .message #moreInfo");

  function toggleContent(event) {
    var text = event.target.previousElementSibling;
    text.classList.toggle("clamp");
    event.target.textContent = text.classList.contains("clamp")
      ? "Show more"
      : "Show less";
  }

  moreInfoBtns.forEach(function (btn) {
    btn.addEventListener("click", toggleContent);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var modalOpenBtn = document.querySelector(".modal-open");
  var modalCloseBtn = document.querySelector(".modal .modal-close");
  var modal = document.querySelector(".modal");
  var overlay = document.querySelector(".overlay");

  modalOpenBtn.addEventListener("click", function () {
    openModal();
  });

  modalCloseBtn.addEventListener("click", function () {
    closeModal();
  });

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeModal();
    }
  });

  function openModal() {
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
});
