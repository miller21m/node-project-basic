const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');


const keys = require('./keys.json');
const { isString } = require('util');
const { rejects } = require('assert');


//create a variable which we can use to receive tokens
const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(error, tokens){
    if(error){
        console.log(error);
        return;
    }else{
        console.log('Conected');
    }
});


async function gsrub(cl){//get all the table
    const sheets = google.sheets({version:'v4', auth:cl});

    let data = sheets.spreadsheets.values.get({
        spreadsheetId:'1K1U4Y7SgS97SaHMrWJUGZOiUlh51tbMPZTAPPe-SNCg',
        range:'Data!A1:B4'
    }, (error, res)=>{
        if(error){
            console.log(error);
        }else{
            console.log(res.data.values);
        }
        
    })
};

 

async function getUser(id){//user sheet by id 

    const client =  new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({version:'v4', auth:client});

    const pr = new Promise((resolve, reject) => {
        sheets.spreadsheets.values.get(
        { 
            spreadsheetId:'1K1U4Y7SgS97SaHMrWJUGZOiUlh51tbMPZTAPPe-SNCg',
            range:'Data!A2:B4'
        }, 
        (err,res)=>{
            if (err) {
                reject(err) // this should throw an error!
            }
            else{
    
                const users = res.data.values
                let user= undefined;
                 users.map(item=>{
                    if(item[0] === id){
                        user = item[0];
                        resolve(user) // YESSSSSS!!!!!!!!!
                    }
                })
    
                if(!user){
                     reject(err) // this should throw an error!
                }
            }
        })
    })
    
    // resolve promise
    const user = await pr
    console.log(user)

    if(user){
        return user;
    }

    if(!user){
        return null;
    }
}

//getUser(client,'212202150');


async function startWorkDay(userId){
    console.log('in startWork day function ' + userId );
    const client =  new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );
    
    const sheets = google.sheets({version:'v4', auth:client});

    
    sheets.spreadsheets.values.get({
        spreadsheetId: '1K1U4Y7SgS97SaHMrWJUGZOiUlh51tbMPZTAPPe-SNCg',
        range: `${userId}`
    }, (error, res)=>{
        if(error){
            console.log(error);
        }else{
            let data = sheets.spreadsheets.values.append({
                spreadsheetId: '1K1U4Y7SgS97SaHMrWJUGZOiUlh51tbMPZTAPPe-SNCg',
                range: `${userId}!A${res.data.values.length+1}` ,
                valueInputOption: 'RAW',
                //insertDataOption: 'INSERT_ROWS',
                resource:{
                    values:[
                        [new Date().toString()]
                    ]
                }
            },(error, res)=>{
                if(error){
                    console.log(error);
                }else{
                    console.log(res.data);
                }
            })
        }
    })
    
}




async function endDay(userId){
    const client =  new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );
    
    const sheets = google.sheets({version:'v4', auth:client});

    sheets.spreadsheets.values.get({
        spreadsheetId: '1K1U4Y7SgS97SaHMrWJUGZOiUlh51tbMPZTAPPe-SNCg',
        range: `${userId}`
    }, (error, res)=>{
        if(error){
            console.log(error);
        }else{
            let data = sheets.spreadsheets.values.append({
                spreadsheetId: '1K1U4Y7SgS97SaHMrWJUGZOiUlh51tbMPZTAPPe-SNCg',
                range: `${userId}!B${res.data.values.length}` ,
                valueInputOption: 'RAW',
                //insertDataOption: 'INSERT_ROWS',
                resource:{
                    values:[
                        [new Date().toString()]
                    ]
                }
            },(error, res)=>{
                if(error){
                    console.log(error);
                }else{
                    console.log(res.data);
                }
            })
        }
    })
}




async function startBraek(userId){

    const client =  new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );
    
    const sheets = google.sheets({version:'v4', auth:client});

    sheets.spreadsheets.values.get({
        spreadsheetId: '1K1U4Y7SgS97SaHMrWJUGZOiUlh51tbMPZTAPPe-SNCg',
        range: `${userId}`
    }, (error, res)=>{
        if(error){
            console.log(error);
        }else{
            let data = sheets.spreadsheets.values.append({
                spreadsheetId: '1K1U4Y7SgS97SaHMrWJUGZOiUlh51tbMPZTAPPe-SNCg',
                range: `${userId}!C${res.data.values.length}` ,
                valueInputOption: 'RAW',
                //insertDataOption: 'INSERT_ROWS',
                resource:{
                    values:[
                        [new Date().toString()]
                    ]
                }
            },(error, res)=>{
                if(error){
                    console.log(error);
                }else{
                    console.log(res.data);
                }
            })
        }
    })
}



async function endBreak(userId){
    const client =  new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );
    
    const sheets = google.sheets({version:'v4', auth:client});

    sheets.spreadsheets.values.get({
        spreadsheetId: '1K1U4Y7SgS97SaHMrWJUGZOiUlh51tbMPZTAPPe-SNCg',
        range: `${userId}`
    }, (error, res)=>{
        if(error){
            console.log(error);
        }else{
            let data = sheets.spreadsheets.values.append({
                spreadsheetId: '1K1U4Y7SgS97SaHMrWJUGZOiUlh51tbMPZTAPPe-SNCg',
                range: `${userId}!D${res.data.values.length}` ,
                valueInputOption: 'RAW',
                //insertDataOption: 'INSERT_ROWS',
                resource:{
                    values:[
                        [new Date().toString()]
                    ]
                }
            },(error, res)=>{
                if(error){
                    console.log(error);
                }else{
                    console.log(res.data);
                }
            })
        }
    })
}

module.exports = {getUser, startWorkDay, endDay, startBraek, endBreak}
//startWorkDay('212202150', client);
//endDay('212202150', client);
 //startBraek('212202150', client);
 //endBreak('212202150', client);

