function Open() {
  if (window.innerWidth > 768) {
    document.getElementById("my-side-nav").style.width = "35%";
    document.getElementById("result-list").style.width = "50%";
    document.getElementById("result-list").style.display = "block";
    document.getElementById("btnOpen").style.display = "none";
    document.getElementById("my-side-nav").style.display = "block";
  } else {
    document.getElementById("my-side-nav").style.width = "100%";
    document.getElementById("result-list").style.width = "60%";
    document.getElementById("result-list").style.display = "block";
    document.getElementById("btnOpen").style.display = "none";
    document.getElementById("my-side-nav").style.display = "block";
  }
}

function Close() {
  if (window.innerWidth > 768) {
    document.getElementById("my-side-nav").style.width = "0";
    document.getElementById("btnOpen").style.display = "block";
  } else {
    document.getElementById("my-side-nav").style.width = "0";
    document.getElementById("btnOpen").style.display = "block";
  }
}

btn = document.getElementById("search").onclick = function () {
  if (window.innerWidth > 768) {
    document.getElementById("my-side-nav").style.width = "35%";
    document.getElementById("result-list").style.width = "50%";
    document.getElementById("result-list").style.display = "block";
    document.getElementById("my-side-nav").style.display = "block";
    document.getElementById("btnOpen").style.display = "none";
  } else {
    document.getElementById("my-side-nav").style.width = "100%";
    document.getElementById("result-list").style.width = "60%";
    document.getElementById("result-list").style.display = "block";
    document.getElementById("my-side-nav").style.display = "block";
    document.getElementById("btnOpen").style.display = "none";
  }
};
