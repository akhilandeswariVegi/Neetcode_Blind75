var climbStairs = (n, sqrt5 = Math.sqrt(5)) => {
    const phi = ((sqrt5 + 1) / 2);
    const psi = ((sqrt5 - 1) / 2);

    const phiPow = Math.pow(phi, (n + 1));
    const psiPow = Math.pow(psi, (n + 1));

    return ((phiPow - psiPow) / sqrt5);
}
