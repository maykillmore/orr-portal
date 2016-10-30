//
// This is the base configuration file for ORR Portal web application.
// Do not edit this file. Instead, define/override properties for your particular
// instance in a sibling file with name 'local.config.js'. In that file, use the
// full path of the properties that need to be defined, for example:
//   appConfig.branding.logo = "https://example.net/my-logo.png";
//   appConfig.orront.rest   = "https://example.net/ont";
//

var appConfig = {
  help: "https://mmisw.org/orrdoc/",

  portal: {
    // (required) main ORR page URL.
    // This can start with '//' to dynamically accommodate http or https access.
    mainPage: "//example.net/ont/"
  },

  orront: {
    // (required) orr-ont endpoint URL. (No trailing slash.)
    // This could be a full URL ("https://example.net/ont")
    // or a path relative to the orr-portal host ("/ont")
    rest: "/ont",

    // (required) SPARQL endpoint URL.  (No trailing slash.)
    // This could be a full URL ("https://example.net/sparql")
    // or a path relative to the orr-portal host ("/sparql")
    sparqlEndpoint: '/sparql'
  },

  // recaptcha: optional
  //recaptcha: {
  //  siteKey:   "PUBLIC KEY"
  //}

  // (optional) allows to specify vocabularies from which to populate selection drop-down lists in metadata editing.
  valueSelections: {
    // Each key:obj entry indicates:
    //    key:                property URI
    //    obj.class:          class of the terms that can be selected as value for the property
    //    obj.sparqlEndpoint: (optional) alternative SPARQL endpoint to query for the terms

    "http://mmisw.org/ont/mmi/20081020/ontologyMetadata/hasResourceType": {
      class: "http://mmisw.org/ont/mmi/resourcetype/ResourceType",

      sparqlEndpoint: "http://mmisw.org/sparql"
    }
  },

  branding: {
    // (optional) URL of image to show in the page header.
    // By default, this will be MMI ORR's logo.
    //logo: "http://cor.esipfed.org/orr/images/logo.png"

    // (optional) string used for <head><title> in main pages.
    // By default, this will be related with the MMI ORR.
    //title: "ESIP Community Ontology Repository"

    // (optional) "Terms of Use" link.
    // No default value.
    //tou: "http://somewhere/mytermsofuse"

    // (optional) "Contact us" link.
    // No default value.
    //contactUs: "http://somewhere/contactus"  // OR  "mailto:addr@example.net"
  },

  externalTools: {
    // ontViewers: List of external ontology browsers/visualizers.
    // These will be shown as options to display ontologies not created by the ORR.
    // They are dispatched in an iframe.
    // Use `$uri` to refer to the ontology URI in srcUrlTemplate.
    ontViewers: [
      {
        name: 'WebVOWL',
        title: 'Web-based Visualization of Ontologies',
        srcUrlTemplate: 'http://vowl.visualdataweb.org/webvowl/index.html#iri=$uri',
        moreInfoUrl: 'http://vowl.visualdataweb.org/webvowl.html'
      }
    ]
  },

  ontologyStatuses: {
    draft:  'The resource is in preliminary stages of development.',
    unstable: 'The meaning, deployment practices, documentation (or important associated software/services)' +
    ' associated with this resource are liable to change arbitrarily at some point in the future.' +
    ' They may not, but stability is not guaranteed. Use with caution.',
    testing: 'The meaning, deployment practices, documentation and general understanding of this resource' +
    ' are approaching some stability, but changes are still possible due to implementation experience or other' +
    ' unanticipated factors.',
    stable: 'The resource is relatively stable, and its documentation and meaning are not expected to change substantially.',
    deprecated: 'The resource is marked as no longer suitable for use, although past uses may still exist.',
    archaic: 'This resource is marked as old-fashioned; although used, it is not considered typical of current' +
    ' best practice and alternative expressions may be preferable.'
  }
};
