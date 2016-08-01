var assert = require('assert');
var should = require('should');

var path2reg = require('path-to-regexp');

var _ = require('../../lib/util');

describe('util.js', function() {

  describe('method:extend', function() {
    it('it should extend the object', function() {
      var o = {a:1};
      _.extend(o, {b:2});
      o.should.have.ownProperty('b');
      o.a.should.be.eql(1);
      o.b.should.be.eql(2);

      _.extend(o, {a:2}, true);
      o.a.should.be.eql(2);
    });
  });

  describe('method:isObject', function() {
    it('it should judge the var is an object or not', function() {
      var o = {a:1};
      var ret = _.isObject(o);
      ret.should.be.eql(true);

      var o = 12;
      var ret = _.isObject(o);
      ret.should.be.eql(false);
    });
  });

  describe('method:isBoolean', function() {
    it('it should judge the var is a boolean or not', function() {
      var o = true;
      var ret = _.isBoolean(o);
      ret.should.be.eql(true);

      var o = 12;
      var ret = _.isBoolean(o);
      ret.should.be.eql(false);
    });
  });

  describe('method:openBrowser', function() {
    it('it will open the browser', function() {
      _.openBrowser('https://github.com/JuneAndGreen/jtr', function(err) {
        if(err) throw err;
        done();
      })
    });
  });

  describe('method:resolveUrl', function() {
    it('it should resolve the url with param', function() {
      var ret = _.resolveUrl('/aa/{id}/cc', {id: 'bb'});
      ret.should.be.eql('/aa/bb/cc');
    });
  });

  describe('method:getParam', function() {
    it('it should get the param from path2reg', function() {
      var regexp = path2reg('/aa/:id/cc');
      var ret = _.getParam(regexp, '/aa/bb/cc');

      ret.should.have.ownProperty('id');
      ret.id.should.be.eql('bb');
    });
  });

});
