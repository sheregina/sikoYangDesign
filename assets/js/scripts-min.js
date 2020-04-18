$(document).ready(function(){
							
		$(".bar").width("0%"),$(".bar").waypoint(function(){
			$(".bar").each(function(){
				var t=$(this).data("percentage");
				$(this).animate({width:t},
				{duration:2e3,easing:"easeOutExpo"})
			})
		},
			{offset:"85%"});
				var t="0";
		
});