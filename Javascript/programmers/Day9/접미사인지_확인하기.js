function solution(my_string, is_suffix) {
  return +[...my_string].map((_, i) => my_string.slice(i)).includes(is_suffix);
}
