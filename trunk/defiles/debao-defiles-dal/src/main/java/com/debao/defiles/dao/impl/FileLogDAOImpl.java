package com.debao.defiles.dao.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import com.debao.defiles.dao.FileLogDAO;
import com.debao.defiles.dao.mapper.FileLogVOMapper;
import com.debao.defiles.vo.FileLogVO;
import com.debao.defiles.vo.query.FileLogQueryVO;

public class FileLogDAOImpl implements FileLogDAO{
	
	@Autowired
	private FileLogVOMapper fileLogVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(FileLogVO fileLogVO) {
		return 1 == fileLogVOMapper.insert(fileLogVO);
	}

	@Override
	public boolean update(FileLogVO fileLogVO) {
		return 1 == fileLogVOMapper.updateByPrimaryKey(fileLogVO);
	}

	@Override
	public boolean delete(Integer id) {
		return 1 == fileLogVOMapper.deleteByPrimaryKey(id);
	}
	
	@Override
	public FileLogVO findByID(Integer id) {
		return fileLogVOMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<FileLogVO> findAll() {
		return null;
	}

	@Override
	public List<FileLogVO> find(FileLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer totalFind(FileLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	public FileLogVOMapper getFileLogVOMapper() {
		return fileLogVOMapper;
	}

	public void setFileLogVOMapper(FileLogVOMapper fileLogVOMapper) {
		this.fileLogVOMapper = fileLogVOMapper;
	}

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
}
