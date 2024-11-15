document.addEventListener("DOMContentLoaded", function (){
	/* Локализация datepicker */
	if($( ".datepicker" ).length > 0){
		$.datepicker.regional['ru'] = {
			closeText: 'Закрыть',
			prevText: 'Предыдущий',
			nextText: 'Следующий',
			currentText: 'Сегодня',
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			weekHeader: 'Не',
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
		};
		$.datepicker.setDefaults($.datepicker.regional['ru']);

		$(function() {
		$( ".datepicker" ).datepicker();
		});
	}
	/* убрать пробел после последней цифры в инпуте проверки смс-кода */
	if($('#confirmCode')){
		$('#confirmCode').bind('input', function(){
			console.log('123');
			if($(this).val().length == 5){
				console.log('456');
				$(this).blur();
			}
		});
	}
	const overlayBg = document.querySelector('#overlay');
	const bodyEl = document.body;

	/* по клику на карточку адреса показать окно modal-reestr p-119.html . вид как на 121 макете*/
	const addressItems = document.querySelectorAll('[data-address]');
	if(addressItems.length > 0){
		for(let i = 0; i < addressItems.length; i++){
			addressItems[i].addEventListener('click', (e)=>{
				
				e.preventDefault();
				for(let j = 0; j < addressItems.length; j++){
					
					if(j == i){
						if(addressItems[j].classList.contains('address-card--current')){
							addressItems[j].classList.remove('address-card--current');
							document.querySelector('#reestr-modal').classList.remove('visible');
							bodyEl.classList.remove('noscroll');
						}
						else{
							document.querySelector('#reestr-modal').classList.add('visible');
							bodyEl.classList.add('noscroll');
							addressItems[j].classList.add('address-card--current')	;		
						}
					}
					else{
						addressItems[j].classList.remove('address-card--current');	
						bodyEl.classList.remove('noscroll');
					}
				}
				
			});
		}
	}
	/*карточка услуги, по клику сделать активной */
	const serviceDisableCards = document.querySelectorAll('.service-card--disable');
	if(serviceDisableCards.length > 0){
		for(let item of serviceDisableCards){
			item.addEventListener('click', function(e){
				item.classList.remove('service-card--disable');
			});
		}
	}

	const serviceActiveCards = document.querySelectorAll('.service-card');

	if(serviceActiveCards.length > 0){
		for(let item of serviceActiveCards){

			item.addEventListener('dblclick', function(e){
				console.log('123');
				if(item.classList.contains('service-card--disable')){
					item.classList.remove('service-card--disable');

				}
				document.querySelector('.service-modal').classList.add('visible');

			});
		}

	}
	/* ==============показать модальные окна,  имеют атрибут frame-modal , кнопка, которая его показывает , имеет атрибут frame-btn, Чтобы закрыть такое окно, прописываем кнопке закрытия атрибут frame-close*/
	const modalFramesOpen = document.querySelectorAll('[frame-btn]');
	const modalFrames = document.querySelectorAll('[frame-modal]');

	if( modalFrames.length > 0){
		
		const modalFramesClose = document.querySelectorAll('[frame-close]');
		for(let item of modalFramesOpen){
			item.addEventListener('click', function(e){
				for(let item of  modalFrames){
					item.classList.remove('visible');
					bodyEl.classList.remove('noscroll');
					overlayBg.classList.remove('active');
					
				}
				e.preventDefault();
				const itemAttr = item.getAttribute('frame-btn');

				for(let frame of modalFrames){
					const frameAttr =frame.getAttribute('frame-modal');	
					if(frameAttr == itemAttr){
						frame.classList.add('visible');
						bodyEl.classList.add('noscroll');
						overlayBg.classList.add('active');
					}
				}
			});
		}
		/*закрыть модалки с атрибутом frame-modal*/
		for(let item of modalFramesClose){
			item.addEventListener('click', function(e){
				
				e.preventDefault();
				item.closest('[frame-modal]').classList.remove('visible');
				bodyEl.classList.remove('noscroll');
				overlayBg.classList.remove('active');
			});
		}
	}
	overlayBg.addEventListener('click', function(e){
	for(let frame of modalFrames){
		frame.classList.remove('visible');
		}
		bodyEl.classList.remove('noscroll');
		this.classList.remove('active');
	});


	//========большой сладер документов =======//
	let docSlider = new Swiper(".doc-slider", {
       slidesPerView: 1,
	   spaceBetween: 24,
       pagination: {
			el: ".doc-slider-pagination",
			clickable: true,
		},
		navigation: {
          nextEl: ".doc-slider-next",
          prevEl: ".doc-slider-prev",
        },
		speed:800,
		loop: true
      });

	//========slider в мод окне-12 =======//
	let categorCardsSlider = new Swiper(".categody-cards__swiper", {
       slidesPerView: 1.6,
	   spaceBetween: 24,
       pagination: {
			el: ".categody-cards-pagination",
			clickable: true,
		},
		navigation: {
          nextEl: ".categody-cards-next",
          prevEl: ".categody-cards-prev",
        },
		speed:800,
		loop: true
      });


});
