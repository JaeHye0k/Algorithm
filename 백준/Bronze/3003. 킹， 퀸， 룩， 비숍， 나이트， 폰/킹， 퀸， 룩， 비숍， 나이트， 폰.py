king = 1
queen = 1
rook = 2
bishop = 2
knight = 2
pawn = 8
k,q,r,b,kn,p = map(int,input().split())
king -= k
queen -= q
rook -= r
bishop -= b
knight -= kn
pawn -= p
print(f'{king} {queen} {rook} {bishop} {knight} {pawn}')