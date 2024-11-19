document.addEventListener("DOMContentLoaded", function (){
	const  bodyEl = document.querySelector('body');
	const buttonsBig = document.querySelectorAll('.btn-big');

	if (buttonsBig.length > 0) {
		buttonsBig.forEach((button) => {
			button.addEventListener('click', () => {
				if (button.classList.contains('btn-press')) {
					// Если кнопка уже активна, снимаем класс активности
					button.classList.remove('btn-press');
				} else {
					// Убираем класс активности у всех кнопок
					buttonsBig.forEach(btn => btn.classList.remove('btn-press'));
					// Добавляем класс активности к текущей кнопке
					button.classList.add('btn-press');
				}
			});
		});
	}

	/* =============== modal с атрибутом frame-modal ===============*/ 
    const modalOpen = document.querySelectorAll('[data-btn]');
    const modalFrames = document.querySelectorAll('[data-modal]');
    if( modalFrames.length > 0){
      const modalFramesClose = document.querySelectorAll('[data-close]');

      for(let item of modalOpen){
        item.addEventListener('click', function(e){
          for(let item of  modalFrames){
            item.classList.remove('visible');
            bodyEl.classList.remove('lock');
          }
          e.preventDefault();
          const itemAttr = item.getAttribute('data-btn');

          for(let frame of modalFrames){
            const frameAttr =frame.getAttribute('data-modal');	
            if(frameAttr == itemAttr){
              frame.classList.add('visible');
              bodyEl.classList.add('lock');
			  if(frame.querySelector('#focus-input')){frame.querySelector('#focus-input').focus();}
			 
            }
          }
        });
      }
      /*==  закрыть модалки  frame-modal по клику на крестик ======*/
	  if(modalFramesClose){
		for(let item of modalFramesClose){
			item.addEventListener('click', function(e){
			e.preventDefault();
			item.closest('[data-modal]').classList.remove('visible');
			bodyEl.classList.remove('lock');
			});
		}
	  }
      
      /*=============== закрыть модалки по клику вне ===============*/
      for(let frame of modalFrames){
        frame.addEventListener('click', function(e){
          if(e.target === e.currentTarget){
            this.classList.remove(`visible`);
            bodyEl.classList.remove('lock');
          }
		  if(frame.querySelector('.custom-input')){
			if (e.target.closest('.custom-input')) {
        		return; // Прекращаем выполнение, если это так
    		}else{
   					this.classList.remove(`visible`);
            		bodyEl.classList.remove('lock');
			  }
		  }

        });
      }
    }
	const sliderEl = document.querySelector("#range");
	const sliderValue = document.querySelector(".value");
	const rangeBtnWrapper = document.querySelector("#range-buttons");
	

	if (sliderEl) {
		const rangeBtn = rangeBtnWrapper.querySelectorAll(".range-btn");
		sliderEl.addEventListener("input", (event) => {
			const tempSliderValue = event.target.value;

			// Обновляем текстовое значение
			sliderValue.textContent = tempSliderValue;

			// Обновляем фон слайдера
			updateSliderBackground(tempSliderValue);
		});

		// Обработчик для кнопок
		rangeBtn.forEach((item) => {
			item.addEventListener("click", () => {
				// Считываем значение из кнопки
				const itemVal = parseInt(item.querySelector(".range-btn__val").textContent, 10);

				// Устанавливаем значение слайдера
				sliderEl.value = itemVal;

				// Программно вызываем событие input для синхронизации положения
				sliderEl.dispatchEvent(new Event("input", { bubbles: true }));
			});
		});
	}

	// Функция обновления фона слайдера
	function updateSliderBackground(value) {
		const progress = (value / sliderEl.max) * 100;
		sliderEl.style.background = `linear-gradient(to right, #c4151c ${progress}%, rgb(240, 240, 243) ${progress}%)`;
	}
	/*====input passw */
	const passwGroup = document.querySelector('.form-passw');
	if(passwGroup){
		const passwInput = passwGroup.querySelector('#pass-input');
		const showPassBtn =  passwGroup.querySelector('.show-passw');
		showPassBtn.addEventListener('click', (e)=>{
			
			e.preventDefault();
			if(showPassBtn.classList.contains('active')){
				showPassBtn.classList.remove('active');
				passwInput.setAttribute('type', 'password');
			}else{
				showPassBtn.classList.add('active');
				passwInput.setAttribute('type', 'text');
			}
		})
	}
});
