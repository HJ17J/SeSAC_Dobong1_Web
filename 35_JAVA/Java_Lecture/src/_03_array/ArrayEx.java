package _03_array;

import java.util.Arrays;

public class ArrayEx {

  public static void main(String[] args) {

    // 1. 타입[] 변수이름;
    // 2. 타입 변수이름[];
    int[] arr1;
    int arr2[];

    String[] temp = null; // 참조형 타입, null로 초기화 가능

    int[] intArray = {10, 22, 25, 44, 55};
    System.out.println("intArray의 0번 인덱스:" + intArray[0]);
    System.out.println("intArray: " + intArray);

    intArray[1] = 20;
    System.out.println("intArray: " + Arrays.toString(intArray));

    char[] charArray;
//    charArray = {'A', 'a'};
    charArray = new char[]{'A', 'a', '2', 66};
    System.out.println(charArray[2]);
    System.out.println(charArray[3]);

    double[] doubleArray = new double[3];
    System.out.println("초기화 전: " + Arrays.toString(doubleArray)); // [0.0, 0.0, 0.0]
    doubleArray[0] = 0.1;
    doubleArray[1] = 0.5;
    doubleArray[2] = 0.7;
    System.out.println("변경 후: " + Arrays.toString(doubleArray)); // [0.1, 0.5, 0.7]

//    char[] charArray = {'A', 'B'}; // 선언 시 초기화 안 했을 경우 compile error

    // 다차원 배열
    int[][] matrix = {{1, 2, 3}, {4, 5, 6}};
    System.out.println("이차원 배열1: " + matrix[0][0]);

    // 배열 생성과 초기화
    int[][] matrix2 = new int[2][3]; // [[1,2,3],[4,5,6]]
    System.out.println("이차원 배열2: " + matrix2[0][0]);
    matrix2[0][0] = 1;
    matrix2[0][1] = 2;
    matrix2[0][2] = 3;
    matrix2[1][0] = 4;
    matrix2[1][1] = 5;
    matrix2[1][2] = 6;

    for (int i = 0; i < matrix2.length; i++) {
      for (int j = 0; j < matrix2[i].length; j++) {
        System.out.printf("matrix[%d][%d]: %d", i, j, matrix2[i][j]).println();
      }
    }

    // 객체를 참조하는 배열
    String[] langs = new String[3];
    langs[0] = "java";
    langs[1] = "java";
    langs[2] = new String("java");
    System.out.println(Arrays.toString(langs));
    System.out.println(langs[0] == langs[1]);
    System.out.println(langs[0] == langs[2]);

    /*
     * 배열 복사
     * - 배열은 초기화/선언과 동시에 크기가 고정됨
     * - 더 많은 저장공간이 필요할 때 더 큰 길이의 배열을 "새로" 만들어 기존 배열을 "복사"한다.
     */

    int[] originArray = {1, 2, 3};
    int[] newArray = new int[5]; // 기존 배열의 크기를 늘리기 위해 새로운 배열 선언
    System.out.println("배열 선언: " + Arrays.toString(newArray)); // [0, 0, 0, 0, 0]

    // ver1. for문 사용
    for (int i = 0; i < originArray.length; i++) {
      newArray[i] = originArray[i];
    }
    System.out.println("복사 후: " + Arrays.toString(newArray)); // [1, 2, 3, 0, 0]

    // ver2. 기본 메서드 사용()
    /*
     * System.arraycopy(src, srcPos, dest, destPos, length)
     * - Object src: 원본 배열
     * - int srcPos: 복사 시작할 원본 배열의 인덱스
     * - Object dest: 새로운 배열
     * - int destPos: 붙여넣기 시작할 새 배열의 인덱스
     * - int length: 복사할 항목의 수
     */
    System.arraycopy(originArray, 0, newArray, 0, originArray.length); // [1, 2, 3, 0, 0]

    String[] originFruits = {"Apple", "Banana", "Orange", "Watermelon"};
    String[] newFruits = new String[5];
    System.out.println("배열 선언: " + Arrays.toString(newFruits)); // [null, null, null, null, null]
//    System.arraycopy(originFruits, 0, newFruits, 0, originFruits.length - 1);
//    System.out.println("복사 후: " + Arrays.toString(newFruits));

    System.arraycopy(originFruits, 1, newFruits, 2, originFruits.length - 2);
    System.out.println("복사 후: " + Arrays.toString(newFruits));

    // Arrays 내장 메서드 확인
    // 1. Arrays.copyOf()
    int[] originArr = {1, 2, 3, 4, 5};
    int[] copiedArr = Arrays.copyOf(originArr, 3);
    int[] copiedArr2 = Arrays.copyOf(originArr, 6);

    System.out.println("copiedArr>> " + Arrays.toString(copiedArr));
    System.out.println("copiedArr>> " + Arrays.toString(copiedArr2));

    // 2. Arrays.copyOfRange(OriginArr, startIndex, endIdx): startIndex<=endIndex
    int[] rangeArray = Arrays.copyOfRange(originArr, 1, 4); // [2,3,4]
    System.out.println("RangeArray>> " + Arrays.toString(rangeArray));

    // 3. Arrays.fill(arr, val): arr의 모든 요소를  val로 채움
    int[] filledArr = new int[5];
    Arrays.fill(filledArr, 10);
    System.out.println("after fill>> " + Arrays.toString(filledArr));

    // 4. Arrays.sort(arr): arr을 오름차순으로 정렬
    int[] unsortedArray = {5, 31, 2, 10, 55, 3};
    Arrays.sort(unsortedArray);
    System.out.println("after sort>> " + Arrays.toString(unsortedArray));

    // 5. Arrays.equals(arr1, arr2): 배열의 주소가 아닌 배열의 요소 비교
    int[] array1 = {1, 2, 3};
    int[] array2 = {1, 2, 3};
    int[] array3 = {1, 2, 3};

    // 등호 이용해서 배열 비교
    System.out.println(array1 == array2);
    System.out.println(array1 == array3);

    // Arrays.equals
    System.out.println("Arrays.equals() (1&2): " + Arrays.equals(array1, array2));
    System.out.println("Arrays.equals() (1&3): " + Arrays.equals(array1, array3));

    // 6. Arrays.deepEquals(arr1, arr2)
    // vs. Arrays.equals()?
    // 배열의 요소가 값이 아닌 주소로 비교해야 될 때
    int[][] deepArray1 = {{1, 2}, {3, 4}};
    int[][] deepArray2 = {{1, 2}, {3, 4}};
    int[][] deepArray3 = {{1, 2}, {3, 5}};
    System.out.println("===== deep equals 사용 =====");
    System.out.println("Array.equals() (1 & 2)" + Arrays.equals(deepArray1, deepArray2)); // false
    System.out.println(
        "Array.deepEquals() (1 & 2)" + Arrays.deepEquals(deepArray1, deepArray2)); // true
    System.out.println(
        "Array.deepEquals() (1 & 3)" + Arrays.deepEquals(deepArray1, deepArray3)); // false

    // 7. binarySearch(arr, val), 이 때의 arr 는 정렬되어 있어야 함
    // 오름차순/내림차순 상관 없음
    int[] sortedArray = {10, 21, 35, 49, 57};
    int index = Arrays.binarySearch(sortedArray, 35);
    int index2 = Arrays.binarySearch(sortedArray, 60);
    System.out.println("index of 35: " + index); // 2
    System.out.println("index of 60: " + index2); // -6 (-6이 고정되어 있는 값이 아닌 무작위 음수값 반환)
    System.out.println();

  }
}
