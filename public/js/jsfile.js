/* eslint-disable */
//<scrypt type='text/javascript'></scrypt>

/*document.querySelector('.cls') = function(){
    var trigger= $(this).find('a')
    var siblings = $(this).siblings()
    var acc_text = $(this).find('.accordion')
        $(trigger).click(function(){
        var visible_text = siblings.find('.accordion').filter(":visible")
        $(acc_text).slideToggle()
        $(visible_text).slideUp()
        });
};*/
/*(function(){
    document.querySelector('.cls').eq(0).trigger('click');
});
$(function(){
    $('.accordion-content').eq(0).trigger('click');
});*/
/*$('.accordion-content').each(function(){
    var trigger= $(this).find('img')
    var siblings = $(this).siblings()
    var acc_text = $(this).find('.cls')
        $(trigger).click(function(){
        var visible_text = siblings.find('.cls').filter(":visible")
        $(acc_text).slideToggle()
        $(visible_text).slideUp()
        });
});

$('.accordion-content').each(function(){
    var trigger= $(this).find('img')
    var acc_text = $(this).find('.cls')
        $(trigger).click(function(){
    
            $(acc_text).slideToggle()
    
        });
    });
*/

/*<script type='text/javascript'> 
    $(function() {$( ".accordion-content" ).cls({active: 0})});
</script>*/
console.log("welcome");
//const userDataForm = document.querySelector('.cls');
/*$(function(){
    $('.cls').click(function() {
        $('.cls').removeClass("active");
        $(this).addClass("active");
    });
    
    $(`.cls:first`).addClass("active");
});*/

const accSingle = document.querySelector('.acc-folder');
const items     = accSingle.querySelectorAll('.acc-content');
const accSingleTriggers = accSingle.querySelectorAll('.acc-trigger');

// 最初の要素を開いておく
const firstChild = accSingle.firstElementChild;
firstChild.classList.add('is-open');

accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('is-open');
      return;
    }
    item.classList.remove('is-open');
  });
}

/*

    .accordion-single.js-acc-single
                                .accordion-single-item.js-acc-item
                                    label.form__label.accordion-single-title.js-acc-single-trigger(for='name') Images
                                    each star in [1, 2, 3, 4, 5]
                                        .accordion-single-content
                                            input.form__upload(type='file', accept='image/*', id=`photo`, name=`images${star}`)
                                            label(for='photo') Choose photos
                                    script.
                                        const accSingle = document.querySelector('.js-acc-single');
                                        const items     = accSingle.querySelectorAll('.js-acc-item');
                                        const accSingleTriggers = accSingle.querySelectorAll('.js-acc-single-trigger');

                                        // 最初の要素を開いておく
                                        const firstChild = accSingle.firstElementChild;
                                        firstChild.classList.add('is-open');

                                        accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

                                        function toggleAccordion() {
                                        const thisItem = this.parentNode;

                                        items.forEach(item => {
                                            if (thisItem == item) {
                                            thisItem.classList.toggle('is-open');
                                            return;
                                            }
                                            item.classList.remove('is-open');
                                        });
                                        }
*/

/*
.accordion-single.js-acc-single
                                each star in [1, 2, 3, 4, 5]
                                    .accordion-single-item.js-acc-item
                                        label.form__label.accordion-single-title.js-acc-single-trigger(for='name')= `Images${star}`
                                        .accordion-single-content
                                            input.form__upload(type='file', accept='image/*', id=`photo`, name=`images`)
                                            label(for='photo') Choose photos 




 .accordion-single.js-acc-single
                                .accordion-single-item.js-acc-item
                                    label.form__label.accordion-single-title.js-acc-single-trigger(for='name') Images
                                    each star in [1, 2, 3, 4, 5]
                                        .accordion-single-content
                                            input.form__upload(type='file', accept='image/*', id=`photo`, name=`images${star}`)
                                            label(for='photo') Choose photos
                            script.
                                const accSingle = document.querySelector('.js-acc-single');
                                const items     = accSingle.querySelectorAll('.js-acc-item');
                                const accSingleTriggers = accSingle.querySelectorAll('.js-acc-single-trigger');

                                const firstChild = accSingle.firstElementChild;
                                firstChild.classList.add('is-open');

                                accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

                                function toggleAccordion() {
                                const thisItem = this.parentNode;

                                items.forEach(item => {
                                    if (thisItem == item) {
                                    thisItem.classList.toggle('is-open');
                                    return;
                                    }
                                    item.classList.remove('is-open');
                                });
                                }


                                            */

/*
.accordion-single.js-acc-single
                                .accordion-single-item.js-acc-item
                                    label.form__label.accordion-single-title.js-acc-single-trigger(for='name') Images
                                    - var iu = 0
                                    each star in [1, 2, 3, 4, 5]
                                        .accordion-single-content
                                            input.form__upload(type='file', accept='image/*', id=`photo`, name=`images${star}`, class=`images${star}`)
                                            label(for='photo') Choose photos
                                            //-input#images.form__input(type='hidden', value=`${star}`)
                                            - iu += 1
                                    input#images.form__input(type='hidden', value=`${iu}`)
                            script.
                                const accSingle = document.querySelector('.js-acc-single');
                                const items     = accSingle.querySelectorAll('.js-acc-item');
                                const accSingleTriggers = accSingle.querySelectorAll('.js-acc-single-trigger');

                                const firstChild = accSingle.firstElementChild;
                                firstChild.classList.add('is-open');

                                accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

                                function toggleAccordion() {
                                const thisItem = this.parentNode;

                                items.forEach(item => {
                                    if (thisItem == item) {
                                    thisItem.classList.toggle('is-open');
                                    return;
                                    }
                                    item.classList.remove('is-open');
                                });
                                }
*/

/*
.accordion
                                input.accordion-select(type="radio" name="select")
                                .accordion-title
                                    label.form__label(for='email') Images   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nabla;
                                .accordion-content
                                    - var iu = 0
                                    each star in [1, 2, 3, 4, 5]
                                        input.form__upload(type='file', accept='image/*', name=`images${star}`, id=`images${star}`, class=`photo`)
                                        label(for='photo')=`Images${iu}`
                                        - iu += 1
                                        script.
                                            var u1 = 0
                                            var imag = [];
                                            imag.push(document.getElementById(`.images${u1}`).value);
                                            u1 += 1
                                            console.log(imag);
                                    input#images.form__input(type='hidden', value=`${iu}`)
                            //-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nabla;    





                            .accordion
                                input.accordion-select(type="radio" name="select")
                                .accordion-title
                                    label.form__label(for='email') Images   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nabla;
                                .accordion-content
                                    //- var iu = 0
                                    //-each star in [1, 2, 3, 4, 5]
                                    input.form__upload(type='file', accept='image/*', name=`images1`, id=`images1`, class=`photo`)
                                    label(for='photo')=`Images1`
                                    input.form__upload(type='file', accept='image/*', name=`images2`, id=`images2`, class=`photo`)
                                    label(for='photo')=`Images2`
                                    input.form__upload(type='file', accept='image/*', name=`images3`, id=`images3`, class=`photo`)
                                    label(for='photo')=`Images3`
                                    input.form__upload(type='file', accept='image/*', name=`images4`, id=`images4`, class=`photo`)
                                    label(for='photo')=`Images4`
                                    //- iu += 1
                                    //-input#images.form__input(type='hidden', value=`${iu}`)
                            //-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nabla;    

/*
/-label.form__label(for='name') Images 
label.form__user-photo(for='email') Images
//- accept='image/*' will accept all type of image multiple='multiple'
input.form__upload(type='file', accept='image/*',  name='images', id='photo', class=`images`,required, multiple) 
label(for='photo') Images
*/ 