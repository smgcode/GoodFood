<?php
	include "header.php";
?>
	
	<div class="contentblock white nopadding">
		<div id="map"></div>
	</div>

	<div class="contentblock white">
		<div class="content">

			<div class="grid_4">
				<h1>Contact</h1>
				<p>
					Fill out the form! Give us a shout we promise to contact you as soon as humanly possible
				</p>
			</div>
			
		</div>
	</div>

	<div class="contentblock white hoverBox">
		<div class="content">

			<div class="grid_12">
				<h2 class="caps">Don't be shy. <span class="change">Stay in touch</span></h2>
			</div>

			<div class="grid_3 serviceBlockPureText" change="Like us on facebook">
				<a href="#">
					<h3>Facebook</h3>
					<p>
						Like us to be updated on our latest news and projects.
					</p>
				</a>
			</div>

			<div class="grid_3 serviceBlockPureText" change="Give us a tweet">
				<a href="#">
					<h3>Twitter</h3>
					<p>
						Find out about us on more of a social level.
					</p>
				</a>
			</div>

			<div class="grid_3 serviceBlockPureText" change="Send us some mail">
				<a href="#">
					<h3>Mail</h3>
					<p>
						Fill in the form below and we'll get straight back to you.
					</p>
				</a>
			</div>

			<div class="grid_3 serviceBlockPureText" change="Pop in the office">
				<a href="#">
					<h3>Office</h3>
					<p>
						123 Park Way, Street<Br/>Country
					</p>
				</a>
			</div>
			
		</div>
	</div>

	<div class="contentblock white">
		<div class="content">

			<div class="grid_12">
				
				<form class="commentForm">

					<input type="text" name="name" class="name" placeholder="Name (required)" />
					<input type="text" name="email" class="email" placeholder="Email (required)" />
					<input type="text" name="subject" class="subject" placeholder="Subject (required)" />

					<textarea name="messagebox" class="messageBox">Your Message Here</textarea>

					<div class="btn">Send Message</div>

				</form>

			</div>
			

		</div>
	</div>


<?php
	include "footer.php";
?>