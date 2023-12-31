export interface InvocDataInterface {
  summonerLevel?: number | undefined,
  profileIconId?: number | undefined,
  name?: string | undefined,
  puuid?: string | undefined,
  accountId?: string | undefined,
  id?: string | undefined,
}
export interface CompleteInvocDataInterface extends InvocDataInterface {
  rank?: string,
  tier?: string,
}