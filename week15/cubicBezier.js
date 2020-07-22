export function cubicBezier(p1x, p1y, p2x, p2y) {
  const ZERO_LIMIT = 1e-6; // 0.000001

  // 计算多项式的系数
  // 第一个控制点和最后一个控制点是(0, 0)和(1, 1)
  const ax = 3 * p1x - 3 * p2x + 1;
  const bx = 3 * p2x - 6 * p1x;
  const cx = 3 * p1x;

  const ay = 3 * p1y - 3 * p2y + 1;
  const by = 3 * p2y - 6 * p1y;
  const cy = 3 * p1y;

  function sampleCurveDerivativeX(t) {
    // 'ax t^3 + bx t^2 + cx t' 使用霍纳氏原则展开
    return (3 * ax * t + 2 * bx ) * t + cx;
  }

  function sampleCurveX(t) {
    return ((ax * t + bx) * t + cx) * t;
  }

  function sampleCurveY(t) {
    return ((ay * t + by) * t + cy) * t;
  }

  // 给定一个x值，找到它的参数值
  function solveCurveX(x) {
    var t2 = x;
    var derivative;
    var x2;

    for(let i = 0; i < 8; i++) {
      x2 = sampleCurveX(t2) - x;
      if(Math.abs(x2) < ZERO_LIMIT) {
        return t2;
      }
      derivative = sampleCurveDerivativeX(t2);
      if(Math.abs(derivative) < derivative) {
        break;
      }
      t2 -= x2 / derivative;
    }

    var t1 = 1;
    var t0 = 0;
    
    t2 = x;

    while(t1 > t0) {
      x2 = sampleCurveX(t2) - x;
      if(Math.abs(x2) < ZERO_LIMIT) {
        return t2;
      }
      if(x2 > 0) {
        t1 = t2;
      } else {
        t0 = t2;
      }

      t2 = (t1 + t0) / 2;
    }

    return t2;
  }

  function solve(x) {
    return sampleCurveY(solveCurveX(x));
  }

  return solve;
}