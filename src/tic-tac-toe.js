class TicTacToe {
    constructor() {
        this.matrix = [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ]
        this.step = null
      }
      _switchSymbol() {
        this.step = this.step === "x" || this.step === null ? "o" : "x"
      }
      _winVariant() {
        const [a, b, c] = this.matrix
        const vertical = [a, b, c].map((_, i) => [a[i], b[i], c[i]])
        const cross = [[a[0], b[1], c[2]], [a[2], b[1], c[0]]]
        return [...this.matrix, ...cross, ...vertical]
      }
      isFinished(){
        return this.isDraw() || !!this.getWinner()
        }
      getCurrentPlayerSymbol() {
        return this.step || 'x'
      }
      nextTurn(row, col) {
        if(this.matrix[row][col]) return
        this.matrix[row][col] =  this.getCurrentPlayerSymbol()
        this._switchSymbol()
      }
      getFieldValue(row, col) {
          return this.matrix[row][col]
      }
      noMoreTurns(){
          return this.matrix.flat().every(itm => Boolean(itm))
      }
      isDraw() {
        return this.noMoreTurns() && !this.getWinner()
      }
      getWinner() {
        const winer = this._winVariant().filter(itm => itm.every(subitm => subitm === itm[0]))
        return winer.length === 0 ? null : winer[0][0]
      }
}

module.exports = TicTacToe;
