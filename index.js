const colors = {
    'pink': ['#991B5F', '#e5c6d7'],
    'blue': ['#1A7DA3', '#8eb8c8'],
    'yellow': ['#B39431', '#c9bc90']
}

const selectedColor = 'pink';
let logoUploaded = false;

const selectColor = document.getElementById('colorSelectors');
const btnLoader = document.getElementById('btn-loader');
const uploadIcon = document.getElementsByClassName('upload_icon')[0];
const umImageEle = document.getElementsByClassName('umbrella_image')[0];
const loader = document.getElementsByClassName('loader')[0];
const uploadButton = document.getElementsByClassName('uploadButton')[0];
const logo = document.getElementById('overlay_image');

uploadButton.style.backgroundColor = '#991B5F';
const body = document.getElementsByTagName('body')[0];

Object.keys(colors).forEach((key, index) => {
    const color = colors[key][0];
    const element = document.createElement('span');
    element.className = 'color';
    element.style.backgroundColor = color;
    element.onclick = () => changeUmbrella(index);
    selectColor.appendChild(element);
});

//Select and change the umbrella
function changeUmbrella(index) {
    const keys = Object.keys(colors);
    const img = `${keys[index]}-umbrella.png`
    setTimeout(() => {
        umImageEle.setAttribute('src', `./assets/ubmrella-images/${img}`);
        umImageEle.style.display = 'block';
        loader.style.display = 'none';
        logoUploaded ? logo.style.display = 'block' : logo.style.display = 'none';
    }, 500);
    umImageEle.style.display = 'none';
    logo.style.display = 'none';
    loader.style.fill = colors[keys[index]][0];
    uploadButton.style.backgroundColor = colors[keys[index]][0];
    uploadButton.style.borderColor = colors[keys[index]][0];
    body.style.backgroundColor = colors[keys[index]][1];
    loader.style.display = 'block';
};

//upload file
function handleFileButtonClick() {
    document.getElementById('fileInput').click();
}

document.getElementById('fileInput').addEventListener('change', (event) => {
    logoUploaded = true;
    setTimeout(() => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const dataUrl = e.target.result;
                const imgElement = document.getElementById('overlay_image');
                imgElement.setAttribute('src', dataUrl);
                imgElement.style.display = 'block';
            }

            reader.readAsDataURL(selectedFile);
            umImageEle.style.display = 'block'
            uploadIcon.style.display = 'block';
            logo.style.display = 'block';
            btnLoader.style.display = 'none';
            loader.style.display = 'none';
        }
    }, 2000);
    umImageEle.style.display = 'none'
    logo.style.display = 'none';
    uploadIcon.style.display = 'none';
    loader.style.display = 'block';
    btnLoader.style.fill = 'white';
    btnLoader.style.display = 'block';
})