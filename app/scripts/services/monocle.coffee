strapApp = angular.module('artisanApp');

strapApp.factory('monocle', ['$http', 'parseWrapper', ($http, parseWrapper) ->



#	This defines your CLASSES -- which is a type of object in your Parse Data Browser
#	Just copy this code exactly when you want to keep track of a new class, just change the name of it and the properties
#	Then add it to the monocle object below by typing monocle.ClassName = parseWrapper.Resource.registerResource(ClassName)
	class Strap extends parseWrapper.Resource
		constructor: (objectId) ->
			super(objectId)

		@parseClassName: "Strap"
		@register: () ->
			#this is where you define your classes properities -- or column names
			imgUrl: undefined,
			barcode: undefined,
			cost: undefined,
			gender: undefined,
			length: undefined,
			msrp: undefined,
			modelNo: undefined,
			price: undefined,
			title: undefined,
			# Pointers
			color: undefined,
			material: undefined,
			model: undefined,
			size: undefined


	class Color extends parseWrapper.Resource
		constructor: (objectId) ->
			super(objectId)

		@parseClassName: "Color"
		@register: () ->
			#this is where you define your classes properities -- or column names
			name: undefined,
			number: undefined,
			rgb: undefined

	class Material extends parseWrapper.Resource
		constructor: (objectId) ->
			super(objectId)

		@parseClassName: "Material"
		@register: () ->
			#this is where you define your classes properities -- or column names
			name: undefined

	class Model extends parseWrapper.Resource
		constructor: (objectId) ->
			super(objectId)

		@parseClassName: "Model"
		@register: () ->
			#this is where you define your classes properities -- or column names
			name: undefined,
			number: undefined

	class Size extends parseWrapper.Resource
		constructor: (objectId) ->
			super(objectId)

		@parseClassName: "Size"
		@register: () ->
			#this is where you define your classes properities -- or column names
			sizeInMillimeters: undefined


	monocle =
		initialize: () ->
			$http.defaults.headers.common['X-Parse-Application-Id'] = 'ZbDr2YfdSml61bcJGGKAqg25YYI1zhycsYLj7gF8'    # beat-1
			$http.defaults.headers.common['X-Parse-REST-API-Key'] = '0jAJPgQ8VqIikLsrAPLwrscwO3kaNMre7mF6MxdV'      # beat-1


#	This is where you define your service === it's defining monocle.Strap so that you can access from any controller
#	That you inject monocle in -- so if you add a new class above, make sure to copy the following line and substituting
#	Whatever ClassName you used
	monocle.Strap = parseWrapper.Resource.registerResource(Strap)
	monocle.Color = parseWrapper.Resource.registerResource(Color)
	monocle.Material = parseWrapper.Resource.registerResource(Material)
	monocle.Model = parseWrapper.Resource.registerResource(Model)
	monocle.Size = parseWrapper.Resource.registerResource(Size)

	monocle.initialize()

	return monocle
])
