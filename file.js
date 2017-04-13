String.prototype.isAudio = function(){
  var possible_audio_exts = ['mp3', 'flac', 'alac', 'aac'], name, ext;
  [name, ext] = this.split('.');
  if ((name == name.replace(/[^A-Za-z]/g,'')) && (ext == ext.toLowerCase())) 
  	return possible_audio_exts.indexOf(ext) > -1 ? true : false;
  else return false;
};

String.prototype.isImage = function(){
  var possible_image_exts = ['jpg', 'jpeg', 'png', 'bmp', 'gif'], name, ext;
  [name, ext] = this.split('.');
  if ((name == name.replace(/[^A-Za-z]/g,'')) && (ext == ext.toLowerCase()))
  	return possible_image_exts.indexOf(ext) > -1 ? true : false;
  else return false;
};

// String.prototype.isAudio= function() {return /^[a-zA-Z]+\.(mp3|flac|alac|aac)$/.test(this)}
// String.prototype.isImage= function(){return /^[a-zA-Z]+\.(jpg|jpeg|png|bmp|gif)$/.test(this)}