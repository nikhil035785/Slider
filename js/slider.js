$(document).ready(function(){
    //one page Which <li> tag contain active class, then below three lines will add classes and ids to previous and next <li> tags
    $('ul#slider-nj li.active').attr('id','active')
    $('ul#slider-nj li.active').next().addClass('li-next-card').attr('id','next');
    $('ul#slider-nj li.active').prev().addClass('li-prev-card').attr('id','prev');

    // code for get position of active class in all <li> tags
    let li_Total_count = $('ul#slider-nj li').length;
    let active_item_Position = $('.active');
    let position = $('ul#slider-nj li').index(active_item_Position);

    // This if else condition for : if active class at first or last li tag then Previous or Next card should be selected to infinite loop slider
    if (position == 0) {
        $("ul#slider-nj li:nth-child("+li_Total_count+")").addClass('li-prev-card');
    }
    else if(position == li_Total_count-1){
        $("ul#slider-nj li:nth-child(1)").addClass('li-next-card').attr('id','next');
    }
    else{}


    // button click events to slide on next or previous next card
    $('.btn-left').click(function(){
        $('li[id="prev"]').click();
    });

    $('.btn-right').click(function(){
        $('li[id="next"]').click();
    });


    // This events will fired on button click or card click using id next and prev
    $('ul#slider-nj li').click(function(){
        let prev, nxt;
        var id = $(this).attr('id');
        if (id == 'next') {

            $(this).siblings().attr('class','').attr('id','');
            $(this).attr('class','').addClass('active').attr('id','active');
            $(this).prev().addClass('li-prev-card').attr('id','prev');
            $(this).next().addClass('li-next-card').attr('id','next');

            prev = 'li-prev-card';
            next = 'li-next-card';

        }
        else if(id == 'prev'){
            $(this).siblings().attr('class','').attr('id','');
            $(this).attr('class','').addClass('active2').attr('id','active');
            $(this).prev().addClass('li-next2-card').attr('id','prev');
            $(this).next().addClass('li-prev2-card').attr('id','next');
            
            prev = 'li-next2-card';
            next = 'li-prev2-card';
        } 
        else {}

        // code for get position of active class in all <li> tags
        let li_Total_count = $('li').length;
        let active_item_Position = $('#active');
        let position = $('li').index(active_item_Position);

        // This if else condition for : if active class at first or last li tag then Previous or Next card should be selected to infinite loop slider
        if (position == 0) {
            $("ul#slider-nj li:nth-child("+li_Total_count+")").addClass(prev).attr('id','prev');
        }
        else if(position == li_Total_count-1){
            $("ul#slider-nj li:nth-child(1)").addClass(next).attr('id','next');
        }
        else{}
    });

    // Time interval for slider
    let timeinterval = 3000;

    // If mouse enter slider container it must be stop
    $('.rounded-circle').mouseenter(function(){
        $('div#slider-container').attr('id',"");
    });
    $('ul[id="slider-nj"]').mouseenter(function(){
        $('div#slider-container').attr('id',"");
    });

    // If mouse leave the slider container it must resume slide
    $('.rounded-circle').mouseleave(function(){
        $('div.slider-container').attr('id',"slider-container");
    });
    
    $('ul[id="slider-nj"]').mouseleave(function(){
        $('div.slider-container').attr('id',"slider-container");
    });

    // Autamatic slide at specific time interval
    setInterval(function(){
        $('div#slider-container ul[id="slider-nj"] li[id="next"]').click();
    },timeinterval);
});
    