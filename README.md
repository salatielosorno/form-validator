# FormValidator
Form Validator - an plugin of jQuery

<h4>IMPLEMENTATION</h4>
<pre>
&lt;form id="<strong>myForm</strong>"&gt;
	&lt;div class="form-group"&gt;
	    &lt;label for="exampleInputName"&gt;Name&lt;/label&gt;
	    &lt;input type="text" class="form-control" id="exampleInputName" placeholder="Name"&gt;
	&lt;/div&gt;
	&lt;div class="form-group"&gt;
	    &lt;label for="exampleInputEmail"&gt;Email address&lt;/label&gt;
	    &lt;input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"&gt;
	&lt;/div&gt;
	&lt;div class="form-group"&gt;
	   &lt;label for="exampleInputPhone"&gt;Phone number&lt;/label&gt;
	   &lt;input type="tel" class="form-control" id="exampleInputPhone" placeholder="Phone"&gt;
	&lt;/div&gt;
	&lt;div class="form-group"&gt;
		&lt;label for="exampleInputFile"&gt;File input&lt;/label&gt;
	    &lt;input type="file" data-allow="number" id="exampleInputFile" class="form-control"&gt;
	&lt;/div&gt;
	&lt;button type="submit" class="btn btn-default" id="<strong>submit</strong>"&gt;Submit&lt;/button&gt;
	&lt;div data-type="notification" class="alert alert-warning" style="display: none"&gt;&lt;/div&gt;
&lt;/form&gt;
</pre>
<h4>JS</h4>
<pre>
&lt;script&gt;
	$('<strong>#submit</strong>').on('click', function(e){
		if(!$('<strong>#myForm</strong>').validate())
			e.preventDefault();
	});
&lt;/script&gt;
</pre>

<h4>Data-attributes</h4>

data-allow='number' - allow only numbers in the field

data-type="notification" - allow show message of validation wrong
