const Mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    collection: 'User'
  }
);

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 8);
});

userSchema.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password);
  }
};

userSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TTL
    });
  }
};

module.exports = Mongoose.model('User', userSchema);
