const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const sequelize = require('../utils/database');

const Round = sequelize.define('round', {
  round_id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: uuidv4(),
  },
  theater: Sequelize.INTEGER,
  time: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  a1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a2: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a3: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a4: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a5: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a6: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a7: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a8: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a9: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a10: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a11: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a12: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a13: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a14: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a15: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a16: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a17: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a18: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a19: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  a20: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b2: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b3: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b4: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b5: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b6: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b7: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b8: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b9: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b10: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b11: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b12: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b13: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b14: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b15: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b16: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b17: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b18: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b19: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  b20: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c2: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c3: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c4: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c5: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c6: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c7: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c8: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c9: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c10: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c11: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c12: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c13: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c14: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c15: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c16: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c17: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c18: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c19: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  c20: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d2: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d3: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d4: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d5: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d6: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d7: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d8: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d9: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d10: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d11: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d12: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d13: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d14: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d15: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d16: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d17: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d18: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d19: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  d20: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e2: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e3: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e4: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e5: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e6: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e7: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e8: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e9: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e10: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e11: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e12: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e13: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e14: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e15: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e16: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e17: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e18: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e19: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  e20: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f2: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f3: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f4: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f5: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f6: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f7: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f8: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f9: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f10: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f11: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f12: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f13: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f14: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f15: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f16: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f17: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f18: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f19: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  f20: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g2: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g3: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g4: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g5: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g6: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g7: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g8: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g9: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g10: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g11: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g12: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g13: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g14: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g15: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g16: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g17: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g18: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g19: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  g20: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h2: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h3: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h4: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h5: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h6: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h7: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h8: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h9: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h10: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h11: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h12: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h13: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h14: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h15: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h16: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h17: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h18: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h19: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  h20: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i2: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i3: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i4: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i5: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i6: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i7: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i8: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i9: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i10: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i11: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i12: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i13: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i14: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i15: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i16: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i17: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i18: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i19: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  i20: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j2: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j3: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j4: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j5: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j6: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j7: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j8: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j9: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j10: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j11: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j12: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j13: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j14: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j15: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j16: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j17: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j18: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j19: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  j20: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k1: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k2: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k3: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k4: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k5: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k6: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k7: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k8: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k9: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k10: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k11: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k12: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k13: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k14: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k15: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k16: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k17: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k18: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k19: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  k20: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Round;
