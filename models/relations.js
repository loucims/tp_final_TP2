import Sonda from "./Sonda";
import RegistroTemperatura from "./RegistroTemperatura";

Sonda.hasMany(RegistroTemperatura)
RegistroTemperatura.hasOne(Sonda)

