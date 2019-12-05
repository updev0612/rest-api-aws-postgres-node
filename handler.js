const db = require('./db_connect');

function getAllOffers(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getAll("Offer")
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      console.log(e);
      callback(null, {
        statusCode: e.statusCode || 500,
        body: 'Error: Could not find Offers: ' + e
      })
    })
};
module.exports.getAllOffers = getAllOffers

function getOffer(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getById("Offer", event.pathParameters.id)
    .then(res => {
      callback(null,{
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      callback(null,{
        statusCode: e.statusCode || 500,
        body: "Could not find Offer: " + e
      })
    })
};
module.exports.getOffer = getOffer

function createOffer(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  db.insert('Offer', data)
    .then(res => {
      callback(null,{
        statusCode: 200,
        body: "Offer Created! id: " + res
      })
    })
    .catch(e => {
      callback(null,{
        statusCode: e.statusCode || 500,
        body: "Could not create Offer " + e
      })
    }) 
};
module.exports.createOffer = createOffer
function deleteOffer(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

    db.deleteById('Offer', event.pathParameters.id)
    .then(res => {
        callback(null,{
            statusCode: 200,
            body: "Offer Deleted!"
        })
    })
    .catch(e => {
        callback(null,{
            statusCode: e.statusCode || 500,
            body: "Could not delete Offer " + e
        })
    })

}
module.exports.deleteOffer = deleteOffer

function updateOffer(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  const data = JSON.parse(event.body);
  db.updateById('Offer', event.pathParameters.id, data)
  .then(res => {
      callback(null,{
          statusCode: 200,
          body: "Offer Updated!" + res
      })
  })
  .catch(e => {
      callback(null,{
          statusCode: e.statusCode || 500,
          body: "Could not update Offer " + e
      })
  })
}
module.exports.updateOffer = updateOffer

function getAllPartners(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getAll("Partner")
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      console.log(e);
      callback(null, {
        statusCode: e.statusCode || 500,
        body: 'Error: Could not find Partners: ' + e
      })
    })
};
module.exports.getAllPartners = getAllPartners

function getPartner(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getById("Partner", event.pathParameters.id)
    .then(res => {
      callback(null,{
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      callback(null,{
        statusCode: e.statusCode || 500,
        body: "Could not find Partner: " + e
      })
    })
};
module.exports.getPartner = getPartner

function createPartner(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  db.insert('Partner', data)
    .then(res => {
      callback(null,{
        statusCode: 200,
        body: "Partner Created! id: " + res
      })
    })
    .catch(e => {
      callback(null,{
        statusCode: e.statusCode || 500,
        body: "Could not create Partner " + e
      })
    }) 
};
module.exports.createPartner = createPartner
function deletePartner(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

    db.deleteById('Partner', event.pathParameters.id)
    .then(res => {
        callback(null,{
            statusCode: 200,
            body: "Partner Deleted!"
        })
    })
    .catch(e => {
        callback(null,{
            statusCode: e.statusCode || 500,
            body: "Could not delete Partner " + e
        })
    })

}
module.exports.deletePartner = deletePartner

function updatePartner(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  const data = JSON.parse(event.body);
  db.updateById('Partner', event.pathParameters.id, data)
  .then(res => {
      callback(null,{
          statusCode: 200,
          body: "Partner Updated!" + res
      })
  })
  .catch(e => {
      callback(null,{
          statusCode: e.statusCode || 500,
          body: "Could not update Partner " + e
      })
  })
}
module.exports.updatePartner = updatePartner

function getAllOfferUseds(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getAll("OfferUsed")
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      console.log(e);
      callback(null, {
        statusCode: e.statusCode || 500,
        body: 'Error: Could not find OfferUseds: ' + e
      })
    })
};
module.exports.getAllOfferUseds = getAllOfferUseds

function getOfferUsed(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getById("OfferUsed", event.pathParameters.id)
    .then(res => {
      callback(null,{
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      callback(null,{
        statusCode: e.statusCode || 500,
        body: "Could not find OfferUsed: " + e
      })
    })
};
module.exports.getOfferUsed = getOfferUsed

function createOfferUsed(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  db.insert('OfferUsed', data)
    .then(res => {
      callback(null,{
        statusCode: 200,
        body: "OfferUsed Created! id: " + res
      })
    })
    .catch(e => {
      callback(null,{
        statusCode: e.statusCode || 500,
        body: "Could not create OfferUsed " + e
      })
    }) 
};
module.exports.createOfferUsed = createOfferUsed
function deleteOfferUsed(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

    db.deleteById('OfferUsed', event.pathParameters.id)
    .then(res => {
        callback(null,{
            statusCode: 200,
            body: "OfferUsed Deleted!"
        })
    })
    .catch(e => {
        callback(null,{
            statusCode: e.statusCode || 500,
            body: "Could not delete OfferUsed " + e
        })
    })

}
module.exports.deleteOfferUsed = deleteOfferUsed

function updateOfferUsed(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  const data = JSON.parse(event.body);
  db.updateById('OfferUsed', event.pathParameters.id, data)
  .then(res => {
      callback(null,{
          statusCode: 200,
          body: "OfferUsed Updated!" + res
      })
  })
  .catch(e => {
      callback(null,{
          statusCode: e.statusCode || 500,
          body: "Could not update OfferUsed " + e
      })
  })
}
module.exports.updateOfferUsed = updateOfferUsed

function getAllPartnerContacts(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getAll("PartnerContact")
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      console.log(e);
      callback(null, {
        statusCode: e.statusCode || 500,
        body: 'Error: Could not find PartnerContacts: ' + e
      })
    })
};
module.exports.getAllPartnerContacts = getAllPartnerContacts

function getPartnerContact(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  db.getById("PartnerContact", event.pathParameters.id)
    .then(res => {
      callback(null,{
        statusCode: 200,
        body: JSON.stringify(res)
      })
    })
    .catch(e => {
      callback(null,{
        statusCode: e.statusCode || 500,
        body: "Could not find PartnerContact: " + e
      })
    })
};
module.exports.getPartnerContact = getPartnerContact

function createPartnerContact(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  db.insert('PartnerContact', data)
    .then(res => {
      callback(null,{
        statusCode: 200,
        body: "PartnerContact Created! id: " + res
      })
    })
    .catch(e => {
      callback(null,{
        statusCode: e.statusCode || 500,
        body: "Could not create PartnerContact " + e
      })
    }) 
};
module.exports.createPartnerContact = createPartnerContact
function deletePartnerContact(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

    db.deleteById('PartnerContact', event.pathParameters.id)
    .then(res => {
        callback(null,{
            statusCode: 200,
            body: "PartnerContact Deleted!"
        })
    })
    .catch(e => {
        callback(null,{
            statusCode: e.statusCode || 500,
            body: "Could not delete PartnerContact " + e
        })
    })

}
module.exports.deletePartnerContact = deletePartnerContact

function updatePartnerContact(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  const data = JSON.parse(event.body);
  db.updateById('PartnerContact', event.pathParameters.id, data)
  .then(res => {
      callback(null,{
          statusCode: 200,
          body: "PartnerContact Updated!" + res
      })
  })
  .catch(e => {
      callback(null,{
          statusCode: e.statusCode || 500,
          body: "Could not update PartnerContact " + e
      })
  })
}
module.exports.updatePartnerContact = updatePartnerContact

async function hello(event) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
module.exports.hello = hello
