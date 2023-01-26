/* Start Work Showcase */
const allTypes = document.querySelectorAll(".work .container .text .shuffle ul li");
const portfolioImages = document.querySelectorAll(".work .container .works .work-box");

allTypes.forEach((element) => {
    if (element.getAttribute("imageType") === "all") {
        element.addEventListener("click", () => {
            document.querySelector(".work .container .works").innerHTML = "";
            let allImagesOfThisType = [];
            portfolioImages.forEach((image) => {
                allImagesOfThisType.push(image);
            })
            allImagesOfThisType.forEach((image) => {
                document.querySelector(".work .container .works").appendChild(image);
            })
        })
    } else {
        element.addEventListener("click", () => {
            document.querySelector(".work .container .works").innerHTML = "";
            let allImagesOfThisType = [];
            portfolioImages.forEach((image) => {
                allImagesOfThisType.push(image);
            })
            allImagesOfThisType.forEach((image) => {
                if (image.getAttribute("worktype") === element.getAttribute("imagetype")) {
                    document.querySelector(".work .container .works").appendChild(image);
                }
            })
        })
    }
})
/* End Work Showcase */