'use strict'

describe 'Directive: background', () ->

  # load the directive's module
  beforeEach module 'artisanApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<background></background>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the background directive'
