<?php
class Validate {
    public static function emptyString($txt) {
        return trim($txt) === '';
    }
    public static function filterEmail($email) {
        return !filter_var($email, FILTER_VALIDATE_EMAIL);

    }
    public static function minNumber($number, $min) {
      return $number < $min;
    }
    public static function maxNumber($number, $max) {
      return $number > $max;
    }
}


?>
