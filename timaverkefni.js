// Render loop demos into #output
const timaverk = document.getElementById("timaverkefni");

// ---------- helper functions ----------
function addSection(title, subtitle) {
  const section = document.createElement("section");
  section.style.marginBottom = "1.5rem";

  const h2 = document.createElement("h3");
  h2.textContent = title;
  section.appendChild(h2);

  if (subtitle) {
    const p = document.createElement("p");
    p.textContent = subtitle;
    p.style.marginTop = "0.25rem";
    p.style.opacity = "0.8";
    section.appendChild(p);
  }

  timaverk.appendChild(section);
  return section;
}

// ------------------------------------------------------------
// 1) FOR loops
// ------------------------------------------------------------

// For loop – Exercise 1
{
  const s = addSection(
    "For – verkefni 1",
    "Prentið allar tölur frá 1 upp í 5."
  );
  //   Notið for loop hér að neðan
  for (let i = 1; i <= 5; i++) {
    const p = document.createElement("p")
    p.textContent = i
    s.appendChild(p)
  }
}

// For – Exercise 2: even numbers



{
  const s = addSection(
    "For – verkefni 2",
    "Prenta aðeins sléttar tölur (1–10)."
  );

  //   Notið for loop hér að neðan og if ef þarf
}

// For – Exercise 3: skip 5, stop at 8
{
  const s = addSection("For – verkefni 3", "Sleppa 5 og stoppa við 8.");

  //   Notið for loop hér að neðan, if, continue og break
}

// ------------------------------------------------------------
// 2) WHILE loops
// ------------------------------------------------------------

// While – Verkefni 1
{
  const s = addSection("While – verkefni 1", "Telja frá 1 upp í 5.");

  let count = 1;
  //   Notið while loop hér að neðan og breytu count
}

// While – Verkefni 2: oddatölur
{
  const s = addSection("While – verkefni 2", "Prenta aðeins oddatölur (1–10).");

  let i = 1;
  //   Notið while loop hér að neðan, if og breytu i
}

// While – Verkefni 3: stoppa á 7
{
  const s = addSection(
    "While – verkefni 3",
    "Stoppa lykkjuna þegar x verður 7. "
  );

  let x = 1;
  //   Notið while loop hér að neðan, if og break
}

// ------------------------------------------------------------
// 3) DO...WHILE loops
// ------------------------------------------------------------

// Do...while – Verkefni 1
{
  const s = addSection(
    "Do...while – verkefni 1",
    "Keyrir einu sinni þó skilyrði sé ósatt."
  );

  let num = 10;
  //   Notið do...while loop hér að neðan og breytu num
}

// Do...while – Verkefni 2
{
  const s = addSection(
    "Do...while – verkefni 2",
    "Telja frá start upp í 3 (start = 1)."
  );

  let start = 1;
  //   Notið do...while loop hér að neðan og breytu start
}

// ------------------------------------------------------------
// 4) FOR...OF loops
// ------------------------------------------------------------

// For...of – Verkefni 1
{
  const colors = ["red", "green", "blue"];
  const s = addSection("for...of – verkefni 1", "Prenta alla liti í fylki.");

  //   Notið for...of loop hér að neðan
}

// For...of – Verkefni 2
{
  const colors = ["red", "green", "blue", "yellow"];
  const s = addSection("for...of – verkefni 2", "Sleppa litnum 'green'.");

  //   Notið for...of loop hér að neðan, if og continue
}

// ------------------------------------------------------------
// 5) FOR...IN loops
// ------------------------------------------------------------

// For...in – Verkefni 1
{
  const person = { name: "Kinga", age: 25, country: "Iceland" };
  const s = addSection(
    "for...in – verkefni 1",
    "Prenta alla eiginleika og gildi hlutar."
  );

  //   Notið for...in loop hér að neðan
}

// For...in – Verkefni 2
{
  const car = { brand: "Tesla", year: 2023, color: "black" };
  const s = addSection(
    "for...in – verkefni 2",
    "Prenta aðeins eiginleika þar sem gildið er strengur."
  );

  //   Notið for...in loop hér að neðan, if og breytu key
}
