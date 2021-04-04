const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const router = require('express').Router();
const path = require( 'path' );



var aws = require("aws-sdk");
const Busboy = require('busboy');
const BUCKET_NAME = '';
const IAM_USER_KEY = 'AKIA26YVPHORJADTK2G5';
const IAM_USER_SECRET = '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';


const s3 = new aws.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: 'codebucketpylearn'
   });
  
  // Single images upload
  const imageUpload = multer({
    storage: multerS3({
     s3: s3,
     bucket: 'codebucketpylearn',
     acl: 'public-read',
     key: function (req, file, cb) {
      cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
     }
    }),
    limits:{ fileSize: 20000000 }, // In bytes: 2000000 bytes = 2 MB
   }).single('python');
  
   function checkFileType( file, cb ){
    // Allowed ext
    const filetypes = /py|png/;
    // Check ext
    const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
    // Check mime
    const mimetype = filetypes.test( file.mimetype );if( mimetype && extname ){
     return cb( null, true );
    } else {
     
    }
}
   
  
   router.post( '/upload', ( req, res ) => {imageUpload( req, res, ( error ) => {
    if( error ){
     res.json( { error: error } );
    } else {
     // If File not found
     if( req.file === undefined ){
      res.json( 'Error: No File Selected' );
     } else {
      // If Success
      const imageName = req.file.originalname;
      const imagelocation = req.file.location;
      res.send(imagelocation);
     }
    }
   });
  });

  module.exports = router