var skeleton;

	$(document).ready( function() {
		
		function scale(skelX, skelY) {
			var ctxWidth = 800;
			var ctxHeight = 600;
			var kinWidth = 1280;
			var kinHeight = 1024;
			var scale = 0.6;

			var scaledX = ctxWidth/2 + scale * ctxWidth * (skelX / (kinWidth*2));
			var scaledY = ctxHeight/2 - scale * ctxHeight * (skelY / (kinHeight*2));

			return {
				x: scaledX,
				y: scaledY
			};

		}

		
		var engager = zig.EngageUsersWithSkeleton(1);
		engager.addEventListener('userengaged', function(user) {
		console.log('User engaged: ' + user.id);

			user.addEventListener('userupdate', function(user) {
				clearCanvas();
				//console.log(JSON.stringify(user.skeleton));
				for(i in user.skeleton) {
					var pos = user.skeleton[i].position;
					var screenPos = scale(pos[0], pos[1]);
					drawCircle(screenPos.x, screenPos.y);

				
				}

				skeleton = user.skeleton;
				

			});
		});
		engager.addEventListener('userdisengaged', function(user) {
		console.log('User disengaged: ' + user.id);
	});
	zig.addListener(engager);




});

function getSkeleton() {
	return skeleton;
}