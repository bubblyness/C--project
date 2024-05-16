package com.choongang;

import java.util.ArrayList;

public class E_addNth {
    public ArrayList<Integer> addNth(ArrayList<Integer> arrayList, int index, int element) {
        // TODO:

        // 범위를 벗어난 index를 인자로 받을경우 null을 리턴해야 합니다
        // 예를 들어 index를 -1로 받거나 리스트보다 넘는 범위 즉 전체 사이즈 - 1 보다 큰 경우 예외처리
        if (index < 0 || index > arrayList.size() - 1) {
            return null;
        }
        arrayList.add(index, element);
        return arrayList;
    }
}
