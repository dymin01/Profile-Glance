package com.profileglance.api.service;

import com.profileglance.api.request.LookatmePostReq;
import com.profileglance.api.response.LookatmePostRes;

import java.util.List;

public interface LookatmeService {

    List<LookatmePostRes> searchByCategory(String category, Long limit);

    List<LookatmePostRes> orderByView(Long limit);

    Boolean uploadLookatme(LookatmePostReq lookatmePostReq);

    Boolean updateLookatme(LookatmePostReq lookatmePostReq);

    List<LookatmePostRes> searchByTitle(String title, Long limit);

    List<LookatmePostRes> searchByNickname(String nickname, Long limit);

    LookatmePostRes detailLookatme(Long lookatmeId);

    Boolean deleteLookatme(Long lookatmeId);

    Boolean deleteLookatmeByUserNickname(String userNickname);

}
