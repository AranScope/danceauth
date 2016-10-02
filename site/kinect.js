var skeleton;

	$(document).ready( function() {
		// setTimeout(function() {
		// 	$("img[alt='Powered by Zigfu']").hide();
		// }, 250);
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
				function draw_line(skeleton, key1, key2) {
						if(skeleton.hasOwnProperty(key1) && skeleton.hasOwnProperty(key2)) {
						var joint1 = skeleton[key1];
						var joint2 = skeleton[key2];
 						var start = scale(joint1.position[0], joint1.position[1]);
						var end = scale(joint2.position[0], joint2.position[1]);
						drawLine(start.x, start.y, end.x, end.y);
						}


					}
		
		var engager = zig.EngageUsersWithSkeleton(1);
		engager.addEventListener('userengaged', function(user) {
		console.log('User engaged: ' + user.id);

			user.addEventListener('userupdate', function(user) {
				clearCanvas();
				


				for(i in user.skeleton) {
					

					var pos = user.skeleton[i].position;
					var screenPos = scale(pos[0], pos[1]);

					drawCircle(screenPos.x, screenPos.y);
				
				}

				function drawBody() {
					draw_line(user.skeleton, '3', '4');
					draw_line(user.skeleton, '2', '3');
					draw_line(user.skeleton, '2', '6');
					draw_line(user.skeleton, '2', '12');
					draw_line(user.skeleton, '1', '2');
					draw_line(user.skeleton, '5', '6');
					draw_line(user.skeleton, '6', '7');
					draw_line(user.skeleton, '7', '8');
					draw_line(user.skeleton, '9', '10');
					draw_line(user.skeleton, '11', '12');
					draw_line(user.skeleton, '12', '13');
					draw_line(user.skeleton, '13', '14');
					draw_line(user.skeleton, '14', '15');
					draw_line(user.skeleton, '15', '16');
					draw_line(user.skeleton, '17', '18');
					draw_line(user.skeleton, '18', '19');
					draw_line(user.skeleton, '19', '20');
					draw_line(user.skeleton, '21', '22');
					draw_line(user.skeleton, '22', '23');
					draw_line(user.skeleton, '23', '24');
					draw_line(user.skeleton, '3', '5');
					draw_line(user.skeleton, '3', '11');
					draw_line(user.skeleton, '4', '17');
					draw_line(user.skeleton, '4', '21');
				}

				drawBody();


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