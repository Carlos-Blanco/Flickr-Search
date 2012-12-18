$(function(){
		$("#button").on("click", function(e){
			e.preventDefault();
			var tags = $("#search").val();
			$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",{
				tags: tags,
				format: "json",
				tagmode: "any"
			}, todoBien);
		});
		function todoBien(dato){
			$("#resultado").empty();
			$(dato.items).each(function(indice, valor){
				var urlImagen = valor.media.m;
				console.log (urlImagen);
				$('<div class="polaroid"><img src="' + urlImagen + '" /></div>').appendTo("#resultado");
			});
		}
	});