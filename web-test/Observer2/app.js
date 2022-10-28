let observers = [];

startup();

function startup() {
  let wrapper = document.querySelector(".wrapper");

  // Options for the observers

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: []
  };

  // Un array con los umbrales para cada caje.
  // El umbral de la primer caja se crea de forma programática
  // ya que hay demasiados puntos.

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0]
  ];

  for (let i=0; i<=1.0; i+= 0.01) {
    thresholdSets[0].push(i);
  }

  // Añadimos cada caja y creamos un observable para cada una
  for (let i=0; i<4; i++) {
    let template = document.querySelector("#boxTemplate").content.cloneNode(true);
    let boxID = "box" + (i+1);
    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));

    // Configuramos el observable para esta caja

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(intersectionCallback, observerOptions);
    observers[i].observe(document.querySelector("#" + boxID));
  }

  // Scroll a la posición inicial

  document.scrollingElement.scrollTop = wrapper.firstChild.getBoundingClientRect().top + window.scrollY;
  document.scrollingElement.scrollLeft = 750;
}

function intersectionCallback(entries) {
  entries.forEach(function(entry) {
    let box = entry.target;
    let visiblePct = (Math.floor(entry.intersectionRatio * 100)) + "%";

    box.querySelector(".topLeft").innerHTML = visiblePct;
    box.querySelector(".topRight").innerHTML = visiblePct;
    box.querySelector(".bottomLeft").innerHTML = visiblePct;
    box.querySelector(".bottomRight").innerHTML = visiblePct;
  });
}