import { JwtPayload } from "@/types/jwtPayload";
import { Injectable } from "@nestjs/common";
/*Passport.jsの認証フローを簡単に統合することができる
→AuthGuard と JwtStrategy を自動的に連携
*/

import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

// @Injectable()：依存注入を有効化している
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // constructor()：なんのクラスをインスタンス化して依存注入するのか
  constructor() {
    super({
      // リクエストでJWTの格納場所を設定
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 有効期限を検証する（true: トークンの有効期限を無視する）
      ignoreExpiration: false,
      // keyを使用してトークンが改竄されていないか確認する
      secretOrKey: process.env.JWT_SECRET
    })
  }
  async validate(payload: JwtPayload) {
    return {
      id: payload.sub,
      firstName: payload.firstName,
      lastName: payload.lastName
    }
  }
}