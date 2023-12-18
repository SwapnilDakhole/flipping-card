let mainContainer = document.querySelector('.main-container');
let frontFace = document.querySelector('.front-face');
let backFace = document.querySelector('.back-face');
let img = document.querySelector('.img');
let artistName = document.querySelector('.artist-name');
console.log(mainContainer);
console.log(artistName);
let counter = 1;
let counter2 = 0;
frontFace.addEventListener('mouseout', (e) => {
  counter += 1;
  if (counter == 3) {
    img.style.backgroundImage =
      "url('https://gossipment.com/_next/image?w=750&q=75&url=https://api.gossipment.com/wp-content/uploads/2023/03/ariana-grande.jpg')";
    artistName.textContent = 'Ariana Grande';
  }
  if (counter == 5) {
    img.style.backgroundImage =
      "url('https://gossipment.com/_next/image?w=750&q=75&url=https://api.gossipment.com/wp-content/uploads/2023/03/Billie-Eilish.jpg')";
    artistName.textContent = 'Billie Eilish';
  }
  if (counter == 7) {
    img.style.backgroundImage =
      "url('https://gossipment.com/_next/image?w=750&q=75&url=https://api.gossipment.com/wp-content/uploads/2023/03/Selena-Gomez-1.jpg')";
    artistName.textContent = 'Selena Gomez';
  }
  if (counter == 9) {
    img.style.backgroundImage =
      "url('https://gossipment.com/_next/image?w=750&q=75&url=https://api.gossipment.com/wp-content/uploads/2023/03/Zayn-Malik.jpg')";
    artistName.textContent = 'Zayn Malik';
    counter = 0;
  }
});
frontFace.addEventListener('mouseover', (e) => {
  counter2 = counter2 + 1;
  if (counter2 == 2) {
    backFace.innerHTML = `
          <p class="para-1">
            <b>Artist Name : </b> <span class="light">Justin Beiber</span>
          </p>
          <p class="para-1"><b>Genre : </b> <span class="light">Pop</span></p>
          <p class="para-1">
            <b>Country : </b> <span class="light">Canada</span>
          </p>
          <p class="para-1">
            <b>Net Worth : </b> <span class="light">$285 million</span>
          </p>
          <p class="para-1">
            <b>Signed By : </b> <span class="light">Island Records</span>
          </p>  
        `;
    console.log(counter2);
  }
  if (counter2 == 4) {
    backFace.innerHTML = `
          <p class="para-1 para">
            <b>Artist Name : </b>
            <span class="light">Ariana Grande</span>
          </p>
          <p class="para-2 para">
            <b>Genre : </b> <span class="light">Pop Contemporary R&B</span>
          </p>
          <p class="para-3 para">
            <b>Country : </b>
            <span class="light">The United States of America</span>
          </p>
          <p class="para-4 para">
            <b>Net Worth : </b>
            <span class="light">$150 million</span>
          </p>
          <p class="para-5 para">
            <b>Signed By : </b>
            <span class="light">Republic Records</span>
          </p>
        `;
    console.log(counter2);
  }
  if (counter2 == 6) {
    backFace.innerHTML = `
          <p class="para-1 para">
            <b>Artist Name : </b>
            <span class="light">Billie Eilish</span>
          </p>
          <p class="para-2 para">
            <b>Genre : </b> <span class="light">Dark Pop, Art Pop</span>
          </p>
          <p class="para-3 para">
            <b>Country : </b>
            <span class="light">The United States of America</span>
          </p>
          <p class="para-4 para">
            <b>Net Worth : </b>
            <span class="light">$25 million</span>
          </p>
          <p class="para-5 para">
            <b>Signed By : </b>
            <span class="light">Interscope Records</span>
          </p>
        `;

    console.log(counter2);
  }
  if (counter2 == 8) {
    backFace.innerHTML = `
          <p class="para-1 para">
            <b>Artist Name : </b>
            <span class="light">Selena Gomez</span>
          </p>
          <p class="para-2 para">
            <b>Genre : </b> <span class="light">Pop</span>
          </p>
          <p class="para-3 para">
            <b>Country : </b>
            <span class="light">The United States of America</span>
          </p>
          <p class="para-4 para">
            <b>Net Worth : </b>
            <span class="light">$75 million</span>
          </p>
          <p class="para-5 para">
            <b>Signed By : </b>
            <span class="light">Interscope Records</span>
          </p>
        `;

    console.log(counter2);
  }
  if (counter2 == 10) {
    backFace.innerHTML = `
          <p class="para-1 para">
            <b>Artist Name : </b>
            <span class="light">Zayn Malik</span>
          </p>
          <p class="para-2 para">
            <b>Genre : </b> <span class="light">Contemporary R&B </span>
          </p>
          <p class="para-3 para">
            <b>Country : </b>
            <span class="light">The United Kingdom</span>
          </p>
          <p class="para-4 para">
            <b>Net Worth : </b>
            <span class="light">$75 million</span>
          </p>
          <p class="para-5 para">
            <b>Signed By : </b>
            <span class="light">Syco Records</span>
          </p>
        `;
    counter2 = 0;
    console.log(counter2);
  }
});
