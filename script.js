window.addEventListener('load', () => {

    let indexActive = 0;
    let indexPrevious = 0;
    const slides = document.getElementsByClassName('item');
    const controls = document.getElementsByClassName('control');
    const controlContainer = document.getElementById('controlContainer');

    controlContainer.addEventListener("click", function (e) {
        // If user clicked on li element, then update active indexes
        if (e.target && e.target.nodeName == "LI") {
            assignOrIncreaseIndex(e.target.dataset.for);
            applyActive();
        }
    });

    const assignOrIncreaseIndex = (nextIndex) => {
        // Assign or increment index
        indexPrevious = indexActive;
        if (nextIndex) {
            indexActive = parseInt(nextIndex);
        } else {
            let slidesNum = slides.length;
            const incrementedIndex = indexActive + 1;
            indexActive = incrementedIndex % (slidesNum);
        }
    };

    const applyActive = () => {
        // images active class
        for (let el of slides) {
            el.classList.remove('previous-active');
            el.classList.remove('active');
        }
        const currEl = slides[indexActive];
        currEl.classList.add('active');
        const previousEl = slides[indexPrevious];
        previousEl.classList.add('previous-active');

        // control active class
        for (let el of controls) {
            el.classList.remove('active');
        }
        const currControl = controls[indexActive];
        currControl.classList.add('active');
    }

    // next slide every 5s
    setInterval(() => {
        assignOrIncreaseIndex();
        applyActive();
    }, 5000);

    // First slide from the beginning
    applyActive();

})