

const complimentBtn = document.getElementById("complimentButton")
const inputText= document.getElementById("input-Text")
const inputForm = document.getElementById("input-Form")
const inputSubmit = document.getElementById("input-Button")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const postCompliment= (e) => {
    e.preventDefault();
  const text = inputText.value;
  const body = {answer: text}
   axios.post("http://localhost:4000/api/compliment/",body).then(res => {
   console.log(res.data)
});
}
 function myFunction(){
    let x ='Hello';
    let y = document.getElementById('fname').value
    let z =', how are you doing?';
    let msg = x+y+z;
    const output= document.getElementById('msgOutput');
    output.style.display = 'block';

complimentBtn.addEventListener("click", getCompliment);
inputSubmit.addEventListener("click", postCompliment);

const fortuneElement = document.getElementById('fortune');
const getFortuneButton = document.getElementById('get-fortune-btn');

getFortuneButton.addEventListener('click', () => {
  fetch('/api/fortune')
    .then(response => response.json())
    .then(data => {
      fortuneElement.textContent = data.fortune;
    })
    .catch(error => {
      console.error('Failed to fetch fortune:', error);
    });
});
