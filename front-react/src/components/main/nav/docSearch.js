import "@/styles/docSearch.css";
import { useState, useEffect, useMemo } from "react";
import { useSetRecoilState } from "recoil";

import { ReactComponent as SearchIcon } from "@/assets/nav/search.svg";
import { ReactComponent as LoadingIcon } from "@/assets/nav/loading.svg";
import { ReactComponent as CloseIcon } from "@/assets/nav/close.svg";

import { isOpenDocSearchState } from "@/recoil/recoil_state";


export default function DocSearch() {
  const [inputValue, setInputValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [timer, setTimer] = useState(0);

  const setIsOpenDocSearch = useSetRecoilState(isOpenDocSearchState);

  const close = () => {
    setIsOpenDocSearch(false);
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);

    debounce(e.target.value);
  }

  // 디바운싱 - 마지막 호출만 적용
  const debounce = (value) => {
    // 이전 타이머 종료
    clearTimeout(timer);
    
    // 유효성검사 : 입력값 없을시 타이머 설정X
    if(value.length == 0){
      // 에러처리 : 입력 중 입력값이 ''이 될 경우에도 로딩아이콘이 돌아가는 에러 해결
      if(isSearching) setIsSearching(false);
      return;
    }

    // 입력 중: 로딩아이콘 표시O
    if(!isSearching) setIsSearching(true);
    
    // 최신 타이머 설정
    const newTimer = setTimeout(() => {
      // 
      callApi(value);

      // 검색완료: 로딩아이콘 표시X
      setIsSearching(false);
    }, 1000);
    setTimer(newTimer);
  }

  const callApi = (value) => {
    console.log('call search api: ', value);
  }

  const handleReset = () => {
    setInputValue("");
  }

  return (
    <>
      <div
        role="combobox"
        aria-expanded="true"
        aria-haspopup="listbox"
        aria-labelledby="docsearch-label"
        className="DocSearch-Container"
        onClick={close}
      >
        <div className="DocSearch-Modal bg-white dark:bg-[#23272f]" onClick={(e) => e.stopPropagation()}>
          <header className="DocSearch-SearchBar">
            <form className="DocSearch-Form" onSubmit={() => false}>
              <label 
                className={`DocSearch-MagnifierLabel ${isSearching ? "hidden" : "flex"}`}
                >
                  <SearchIcon />
              </label>
              <div 
                className={`DocSearch-LoadingIndicator ${!isSearching ? "hidden" : "flex"}`}
                >
                  <LoadingIcon />
              </div>
              <input 
                className="DocSearch-Input" 
                aria-autocomplete="both" 
                aria-labelledby="docsearch-label" 
                autoComplete="off" 
                autoCorrect="off" 
                autoCapitalize="off" 
                enterKeyHint="search" 
                spellCheck="false" 
                placeholder="Search docs" 
                maxLength="64" 
                type="search"
                onChange={handleChange}
                />
            <button 
              className={`DocSearch-Reset ${inputValue.length == 0 && "hidden"}`} 
              type="reset" 
              title="Clear the query" 
              onClick={handleReset}
              >
                <CloseIcon />
            </button>
          </form>
            <button 
              className="DocSearch-Cancel"
              onClick={close}
              >
                Cancel
            </button>
          </header>
        </div>
      </div>
    </>
  );
}
