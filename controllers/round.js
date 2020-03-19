const QRCode = require('qrcode');

const Movie = require('../models/movie');
const Round = require('../models/round');

exports.getRounds = (req, res, next) => {
  const { movieId } = req.query;
  Movie.findByPk(movieId)
    .then(movie => {
      if (!movie) {
        return res.redirect('/');
      }
      movie
        .getRounds({
          order: ['time'],
        })
        .then(results => {
          const english = [];
          const thai = [];
          for (const round of results) {
            if (round.language === 'EN/TH') {
              english.push(round.time);
            } else {
              thai.push(round.time);
            }
          }
          res.render('main/movie-detail', {
            rounds: results,
            pageTitle: 'Rounds',
            path: '/rounds',
          });
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => console.log(err));
};

exports.getTickets = (req, res, next) => {
  const { roundId } = req.query;
  const seating = [
    'a1',
    'a2',
    'a3',
    'a4',
    'a5',
    'a6',
    'a7',
    'a8',
    'a9',
    'a10',
    'a11',
    'a12',
    'a13',
    'a14',
    'a15',
    'a16',
    'a17',
    'a18',
    'a19',
    'a20',
    'b1',
    'b2',
    'b3',
    'b4',
    'b5',
    'b6',
    'b7',
    'b8',
    'b9',
    'b10',
    'b11',
    'b12',
    'b13',
    'b14',
    'b15',
    'b16',
    'b17',
    'b18',
    'b19',
    'b20',
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'c6',
    'c7',
    'c8',
    'c9',
    'c10',
    'c11',
    'c12',
    'c13',
    'c14',
    'c15',
    'c16',
    'c17',
    'c18',
    'c19',
    'c20',
    'd1',
    'd2',
    'd3',
    'd4',
    'd5',
    'd6',
    'd7',
    'd8',
    'd9',
    'd10',
    'd11',
    'd12',
    'd13',
    'd14',
    'd15',
    'd16',
    'd17',
    'd18',
    'd19',
    'd20',
    'e1',
    'e2',
    'e3',
    'e4',
    'e5',
    'e6',
    'e7',
    'e8',
    'e9',
    'e10',
    'e11',
    'e12',
    'e13',
    'e14',
    'e15',
    'e16',
    'e17',
    'e18',
    'e19',
    'e20',
    'f1',
    'f2',
    'f3',
    'f4',
    'f5',
    'f6',
    'f7',
    'f8',
    'f9',
    'f10',
    'f11',
    'f12',
    'f13',
    'f14',
    'f15',
    'f16',
    'f17',
    'f18',
    'f19',
    'f20',
    'g1',
    'g2',
    'g3',
    'g4',
    'g5',
    'g6',
    'g7',
    'g8',
    'g9',
    'g10',
    'g11',
    'g12',
    'g13',
    'g14',
    'g15',
    'g16',
    'g17',
    'g18',
    'g19',
    'g20',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'h7',
    'h8',
    'h9',
    'h10',
    'h11',
    'h12',
    'h13',
    'h14',
    'h15',
    'h16',
    'h17',
    'h18',
    'h19',
    'h20',
    'i1',
    'i2',
    'i3',
    'i4',
    'i5',
    'i6',
    'i7',
    'i8',
    'i9',
    'i10',
    'i11',
    'i12',
    'i13',
    'i14',
    'i15',
    'i16',
    'i17',
    'i18',
    'i19',
    'i20',
    'j1',
    'j2',
    'j3',
    'j4',
    'j5',
    'j6',
    'j7',
    'j8',
    'j9',
    'j10',
    'j11',
    'j12',
    'j13',
    'j14',
    'j15',
    'j16',
    'j17',
    'j18',
    'j19',
    'j20',
    'k1',
    'k2',
    'k3',
    'k4',
    'k5',
    'k6',
    'k7',
    'k8',
    'k9',
    'k10',
    'k11',
    'k12',
    'k13',
    'k14',
    'k15',
    'k16',
    'k17',
    'k18',
    'k19',
    'k20',
  ];
  const plan = {};
  Round.findByPk(roundId).then(round => {
    if (!round) {
      return res.redirect('/');
    }
    seating.forEach(seat => {
      if (round[seat] !== 1) {
        const newSeat = seat.match(/[a-z]+|[^a-z]+/gi);
        if (plan[newSeat[0]] === undefined) {
          plan[newSeat[0]] = [];
        }
        plan[newSeat[0]].push(newSeat[1]);
      }
    });
    res.render('main/buy-ticket', {
      round_id: roundId,
      rows: Object.keys(plan),
      cols: Object.values(plan),
      pageTitle: 'Rounds',
      path: '/buy-ticket',
    });
  });
};

exports.postTickets = (req, res, next) => {
  const { seat } = req.body;
  const { roundId } = req.body;
  let rnd;
  Round.findByPk(roundId)
    .then(round => {
      if (!round) {
        return res.redirect('/');
      }
      rnd = round;
      round[seat] = 1;
      return round.save();
    })
    .then(() => {
      QRCode.toDataURL(seat + roundId, function(err, url) {
        res.render('main/checkout', {
          url,
          seat,
          rnd,
          pageTitle: 'Rounds',
          path: '/checkout',
        });
      });
    })
    .catch(err => console.log(err));
};

exports.getCheckout = (req, res, next) => {
  res.render('main/checkout', {
    pageTitle: 'Rounds',
    path: '/checkout',
  });
};
