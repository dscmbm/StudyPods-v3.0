# Tic Tac Toe Player

import math
import copy


X = "X"
O = "O"
EMPTY = None


def initial_state():
    """
    Returns starting state of the board.
    """
    return [[EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY]]


def player(board):
    """
    Returns player who has the next turn on a board.
    """
    if board == initial_state():
        return X

    howmanyX = 0
    howmanyO = 0

    for row in board:
        howmanyX += row.count(X)
        howmanyO += row.count(O)

    if howmanyX == howmanyO:
        return X
    else:
        return O


def actions(board):
    """
    Returns set of all possible actions (i, j) available on the board.
    """
    possible_moves = []
    for i in range(3):
        for j in range(3):
            if board[i][j] == EMPTY:
                possible_moves.append([i, j])
    return possible_moves


def result(board, action):
    """
    Returns the board that results from making move (i, j) on the board.
    """
    i, j = action
    new_board = copy.deepcopy(board)
    current_player = player(new_board)

    if new_board[i][j] is not EMPTY:
        raise Exception("Invalid action.")
    else:
        new_board[i][j] = current_player

    return new_board


def winner(board):
    """
    Returns the winner of the game, if there is one.
    """
    columns = []

    # Check rows
    for row in board:
        howmanyX = row.count(X)
        howmanyO = row.count(O)
        if howmanyX == 3:
            return X
        if howmanyO == 3:
            return O

    # Check columns
    for j in range(len(board)):
        column = [row[j] for row in board]
        columns.append(column)

    for j in columns:
        howmanyX = j.count(X)
        howmanyO = j.count(O)
        if howmanyX == 3:
            return X
        if howmanyO == 3:
            return O

    # Check diagonals
    if board[0][0] == O and board[1][1] == O and board[2][2] == O:
        return O
    if board[0][0] == X and board[1][1] == X and board[2][2] == X:
        return X
    if board[0][2] == O and board[1][1] == O and board[2][0] == O:
        return O
    if board[0][2] == X and board[1][1] == X and board[2][0] == X:
        return X

    # No winner/tie
    return None


def terminal(board):
    """
    Returns True if game is over, False otherwise.
    """
    # Check if board is full or if there is a winner
    freespace_counter = 0
    for row in board:
        freespace_counter += row.count(EMPTY)
    if freespace_counter == 0:
        return True
    elif winner(board) is not None:
        return True
    else:
        return False


def utility(board):
    """Returns 1 if X has won the game, -1 if O has won, 0 otherwise."""
    if winner(board) == X:
        return 1
    elif winner(board) == O:
        return -1
    else:
        return 0


def minimax(board):
    """Returns the optimal action for the current player on the board."""
    global best_move
    current_player = player(board)

    if current_player == X:
        # Set the score to -infinity
        score = -math.inf
        for action in actions(board):
            # Score will be the maximum of all the scores returned from 'Os' optimal move
            minValueResult = minimize(result(board, action))
            # If the best score is greater than current score, store new values for score and best move
            if minValueResult > score:
                score, best_move = minValueResult, action

    elif current_player == O:
        # Set the score to +infinity
        score = math.inf
        for action in actions(board):
            # Score will be the minimum of all the scores returned from 'Xs' optimal move
            maxValueResult = maximize(result(board, action))
            # If the best score is less than current score, store new values for score and best move
            if maxValueResult < score:
                score, best_move = maxValueResult, action

    return best_move


def minimize(board):
    """Returns the minimum score for the given board state."""
    if terminal(board):
        return utility(board)

    score = math.inf
    possible_moves = actions(board)
    for action in possible_moves:
        final_result = result(board, action)
        score = min(score, maximize(final_result))
    return score


def maximize(board):
    """Returns the maximum score for the given board state."""
    if terminal(board):
        return utility(board)

    score = -math.inf
    possible_moves = actions(board)
    for action in possible_moves:
        final_result = result(board, action)
        score = max(score, minimize(final_result))
    return score
