const express = require('express');
const router = express.Router();
const error_code = require('../define/error-code-define');
const error_msg = require('../define/error-msg-define');
const io = require('socket.io')(server);
const mobileSockets = {};

router.get('/', (req, res, next) => {
  console.log('chat 1 1');
  return handleResponse(res, null, error_code.ERROR_CODE_REQ_GET_USER_INFO_SUCCESS, error_msg.ERROR_MSG_REQ_GET_USER_INFO_SUCCESS);
});


function handleResponse(res, user, code, statusMsg) {
  switch (code) {
      
    case error_code.ERROR_CODE_REQ_UPLOAD_AVATAR_USER_ERROR: {
      res.status(200).json({
        error_code: error_code.ERROR_CODE_REQ_UPLOAD_AVATAR_USER_ERROR,
        error_msg: error_msg.ERROR_MSG_REQ_UPLOAD_AVATAR_USER_ERROR,
        data: null
      });
      break;
    }



    default: {
      res.status(400).json({ error_code: error_code.ERROR_CODE_REQ_ERROR, error_msg: error_msg.ERROR_MSG_REQ_ERROR, data: null });
      break;
    }
  }
}

module.exports = router;
