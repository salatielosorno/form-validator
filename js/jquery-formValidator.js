(function($){
	$(function(){
		var onlyNumbers = $('input[data-allow="number"');

		$.each(onlyNumbers, function(index,el){
			$(el).on('keypress', function(e){
				if(!(e.keyCode >=48 && e.keyCode <= 57))
					e.preventDefault();
			});
		});

		$('input').on('keydown',function(){
			$(this).parent('div').removeClass('has-error');
		});
	})

	var _validateTypeInput = function(el){
		var type = $(el).attr('type');

		switch(type){
			case 'text':
				if($(el).val() === "")
					$(el).parent('div').addClass('has-error');
				else
					$(el).parent('div').removeClass('has-error');
			break;
			case 'tel':
				if(($(el).val().length > 9 && $(el).val().length < 13) && $(el).val() !== "")
					$(el).parent('div').removeClass('has-error');
				else
					$(el).parent('div').addClass('has-error');
			break;
			case 'email':
				var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

				if(regex.test($(el).val()) && $(el).val() !== "")
					$(el).parent('div').removeClass('has-error');
				else
					$(el).parent('div').addClass('has-error');
			break;
			case 'file':
				if(el.files.length > 0)
					$(el).parent('div').removeClass('has-error');
				else
					$(el).parent('div').addClass('has-error');
			break;
			default:
			break;
		}
	}

	var _validateTextArea = function(array){
		$.each(array, function(index, el) {
			if($(el).val() === "")
				$(el).parent('div').addClass('has-error');
			else
				$(el).parent('div').removeClass('has-error');
		});
	}

	var _validateSelects = function(array){
		$.each(array,function(index, el) {
			if($(el).index() === 0)
				$(el).parents('div').first().addClass('has-error');
			else
				$(el).parents('div').first().removeClass('has-error');
		});
	}

	var _setNotification = function (el,message){
		if(el.length > 0){
			el.html(message);//'Faltan campos por completar'
			el.css({'display':'block'});
			setTimeout(function(){ el.html(''); el.css({'display': 'none'})}, 3000)
		}
	}

	$.fn.extend({
		validate : function(){
			this.each(function(index, el) {

				var inputs = $(this).find('input');

				$.each(inputs,function(index, el) {
					_validateTypeInput(el);
				});

				var textareas = $(this).find('textarea');

				_validateTextArea(textareas);

				var selects = $(this).find("select option:selected");

				_validateSelects(selects);
			});

			var notification = $(this).find('div[data-type="notification"]');

			var elementInvalid = $(this).find('.has-error');

			if(elementInvalid.length > 0){
				_setNotification(notification, 'Faltan campos por completar');
				return false;
			}
			else
				return true;
		}
	});
})(jQuery)